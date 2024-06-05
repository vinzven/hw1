<?php

session_start();
require 'config.php';

// Inizializziamo la variabile di sessione per gli errori
$_SESSION['error'] = '';

// Verifica se la richiesta è stata inviata con il metodo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Controlla se i campi obbligatori sono vuoti
    if (empty($_POST['selectedOption']) || empty($_POST['price']) || empty($_POST['shoe_desc'])) {
        $_SESSION['error'] .= "All fields must be filled";
    } else {
        // Controlla se il prezzo è un numero
        if (!is_numeric($_POST['price']) || !ctype_digit($_POST['price'])) {
            $_SESSION['error'] .= "Price must be a numeric integer value";
        }

        // Controlla se la descrizione non contiene numeri
        if (preg_match('/[0-9]/', $_POST['shoe_desc'])) {
            $_SESSION['error'] .= "Shoe description must be a string";
        }
    }

    // Se ci sono errori, reindirizza alla pagina precedente
    if (!empty($_SESSION['error'])) {
        header("Location: http://localhost/HW1/source/sell.php");
        exit;

    } else {
        // Se non ci sono errori, procedi con l'elaborazione dei dati
        // Escapare i valori per prevenire SQL injection
        $size = mysqli_real_escape_string($connessione, $_POST['selectedOption']);
        $price = mysqli_real_escape_string($connessione, $_POST['price']);
        $shoeDesc = mysqli_real_escape_string($connessione, $_POST['shoe_desc']);
        $id_shoe = 0;
        $id_taglia = 0;

        echo $size . '<br>' . $price . '<br>' . $shoeDesc . '<br>';
        $sql = "SELECT id from scarpe where scarpe.descrizione ='$shoeDesc'";
        $query = $connessione->query($sql);

        if ($query->num_rows > 0) {
            $row = $query->fetch_assoc();
            $id_shoe = $row["id"];
        } else {
            $_SESSION['error'] = "Errore: Product not found.";
            header("Location: http://localhost/HW1/source/sell.php");
            exit;
        }
        ;

        $sql = "SELECT t.id FROM scarpe s join taglie_scarpe t on s.id=t.scarpa_id where t.taglia = '$size' ";
        $query = $connessione->query($sql);

        if ($query->num_rows > 0) {
            $row = $query->fetch_assoc();
            $id_taglia = $row["id"];
        } else {
            $_SESSION['error'] = "Errore: Product not found.";
            header("Location: http://localhost/HW1/source/sell.php");
            exit;
        }
        ;

        //se tutto ok inserisco la vendita in corso
        $sql = "INSERT into vendite_in_corso( id_utente ,id_taglia ,prezzo,data_pubblicazione ) values (' " . $_SESSION['id'] . " ', '$id_taglia','$price', NOW() )";
        $query = $connessione->query($sql);

        //fase di aggiornamento taglie_scarpe, con user id e prezzo minore dell user in tutto il sito
        echo 'Vendita inserita correttamente!<br>';
        $sql = "UPDATE taglie_scarpe set quantita= quantita + 1 where id='$id_taglia'";
        $query = $connessione->query($sql);
        echo 'Quantita inserita correttamente!<br>';

        $sql = "SELECT prezzo_minore from taglie_scarpe where id='$id_taglia' ";
        $query = $connessione->query($sql);

        if ($query->num_rows > 0) {
            $row = $query->fetch_assoc();
            $prezzo_minore = $row["prezzo_minore"];
        } else {
            $_SESSION['error'] = "Errore: Product not found.";
            header("Location: http://localhost/HW1/source/sell.php");
            exit;
        };

        $id_user=$_SESSION['id'];
        if ($prezzo_minore == 0) {

            if ($price >= 20) {

                $sql = "UPDATE taglie_scarpe set prezzo_minore = '$price' ,  user_prezzo_minore= '$id_user' where id='$id_taglia' ";
                $query = $connessione->query($sql);

            } else {
                $_SESSION['error'] = "Errore: price smaller than 20.";
                header("Location: http://localhost/HW1/source/sell.php");
                exit;
            };

        }else{

            if($price < $prezzo_minore){
                $sql = "UPDATE taglie_scarpe set prezzo_minore = '$price', user_prezzo_minore= '$id_user' where id='$id_taglia'";
                $query = $connessione->query($sql);
            };

            

        };

        echo 'Sezione vendite e taglie aggiornate<br>';

        //infine, aggiorno il prezzo minore per il prodotto in questione
        $sql="SELECT min(prezzo_minore) as minprice from taglie_scarpe where prezzo_minore >=20 and scarpa_id=' $id_shoe'  ";
        $query = $connessione->query($sql);

        if ($query->num_rows > 0) {
            $row = $query->fetch_assoc();
            $minprice = $row["minprice"];
        } else {
            $_SESSION['error'] = "Errore: price not found.";
            header("Location: http://localhost/HW1/source/sell.php");
            exit;
        };

        $sql="UPDATE scarpe set minprice= '$minprice' where id = '$id_shoe ' ";
        $query = $connessione->query($sql);

        echo '<br>VENDITA TERMINATA<br>';

        header('Location: http://localhost/HW1/source/profile/sellings.php');

    }
} else {
    // Se la richiesta non è una richiesta POST:
    $_SESSION['error'] = "Errore: Richiesta non valida.";
    header("Location: http://localhost/HW1/source/index.php");
    exit;
}
;

$connessione->close();


?>