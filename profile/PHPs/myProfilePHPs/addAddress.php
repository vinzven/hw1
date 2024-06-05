<?php
session_start();
require 'config.php';

// Verifica se la richiesta è stata inviata tramite il metodo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Controlla se tutti i campi del modulo sono stati compilati
    if (!empty($_POST['indirizzo']) && !empty($_POST['citta']) && !empty($_POST['stato']) && !empty($_POST['cap'])) {
        // Sanificazione e validazione dei dati inseriti dall'utente


        $indirizzo = mysqli_real_escape_string($connessione, $_POST['indirizzo']);
        $citta = mysqli_real_escape_string($connessione, $_POST['citta']);
        $stato = mysqli_real_escape_string($connessione, $_POST['stato']);
        $cap = mysqli_real_escape_string($connessione, $_POST['cap']);


        // Query di inserimento dei dati nel database
        if (!empty($_POST['tel'])) {

            if (!is_numeric($_POST['cap']) || !is_numeric($_POST['tel'])) {
                header("Location: http://localhost/HW1/source/profile/myProfile.php?error=zip_or_phone_not_numeric");
                $connessione->close();
                exit;
            }
            ;

            $telefono = mysqli_real_escape_string($connessione, $_POST['tel']);
            $sql = "INSERT INTO indirizzi (id_utente,indirizzo, citta, stato, cap, tel) 
                VALUES (" . $_SESSION['id'] . ",'$indirizzo', '$citta', '$stato', '$cap', '$telefono')";
            $query = $connessione->query($sql);
            header('Location: http://localhost/HW1/source/profile/myProfile.php?q=address_addedd');
        

        } else {
            $sql = "INSERT INTO indirizzi (id_utente,indirizzo, citta, stato, cap) 
                VALUES (" . $_SESSION['id'] . ",'$indirizzo', '$citta', '$stato', '$cap')";
            $query = $connessione->query($sql);

            header('Location: http://localhost/HW1/source/profile/myProfile.php?q=address_addedd');
        }

        // Chiudi la connessione al database
    } else {
        echo "Si prega di compilare tutti i campi del modulo.";
        header("Location: http://localhost/HW1/source/profile/myProfile.php?error=blank_field");
        exit;
    }
    ;
}
;
$connessione->close();
?>