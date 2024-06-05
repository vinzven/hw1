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
        $telefono = mysqli_real_escape_string($connessione, $_POST['tel']);

        if (!is_numeric($_POST['cap'])) {
            header("Location: http://localhost/HW1/source/profile/myProfile.php?error=not_numeric");
            $connessione->close();
            exit;
        }
        ;



        // Query di inserimento dei dati nel database
        $sql = "UPDATE indirizzi
        SET indirizzo = '$indirizzo', citta = '$citta', stato = '$stato', cap = '$cap', tel = '$telefono'
        WHERE id_utente =" . $_SESSION['id'] . ";";
        $connessione->query($sql);

        header('Location: http://localhost/HW1/source/profile/myProfile.php?q=address_modified');

        // Chiudi la connessione al database
    } else {
        echo "Si prega di compilare tutti i campi del modulo.";
        header("Location: http://localhost/HW1/source/profile/myProfile.php?error=blank_field");
    }
    ;
}
;
$connessione->close();
?>