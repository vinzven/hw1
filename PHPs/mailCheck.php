<?php

require 'config.php';
header('Content-Type: application/json');


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!isset($_POST['email'])) {
        $_POST['email'] = '';
    };


    $email = mysqli_real_escape_string($connessione, $_POST['email']);
    $sql = "SELECT * FROM utenti WHERE email = '$email'";
    $result = $connessione->query($sql);

    if (!$result) {
        errorResponse('Errore durante l\'esecuzione della query.');
    }

    $response = array();
    if ($result->num_rows > 0) {
        $response['exists'] = true;
    } else {
        $response['exists'] = false;
    }

    echo json_encode($response);
    $connessione->close();
} else {
    errorResponse('Metodo non consentito.');
}

?>
