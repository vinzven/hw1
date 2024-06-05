<?php

require "config.php";
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['q'])) {

        $query = urldecode($_GET['q']);
        $query_sanitized = mysqli_real_escape_string($connessione, $query);
        $sql = "SELECT * FROM scarpe s join taglie_scarpe t on s.id = t.scarpa_id where s.descrizione = '$query_sanitized' ";
        $result = $connessione->query($sql);

        $results = [];
        if ($result) {
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $results[] = $row;
                }
            }
            echo json_encode($results);
        } else {
            http_response_code(500);
            echo json_encode(array('error' => 'Errore nella query al database'));
        }

    } else {
        // Parametro "query" mancante
        http_response_code(400);
        echo json_encode(array('error' => 'Parametro "query" mancante'));
    }
} else {
    // Metodo non consentito
    http_response_code(405);
    echo json_encode(array('error' => 'Metodo non consentito'));
}

?>