<?php

require "config.php";
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['query'])) {

        $query = mysqli_real_escape_string($connessione, $_GET['query']);
        $query = strtolower($query); // Converto il valore di ricerca in minuscolo
        $query = str_replace('"', '', $query); // Rimuovo le virgolette doppie

         // Divido la stringa di ricerca in parole
         $keywords = explode(' ', $query);
         $conditions = [];
         foreach ($keywords as $keyword) {
             $conditions[] = "nome_minuscolo LIKE '%$keyword%'";
         }
        $sql = "SELECT * FROM scarpe WHERE " . implode(' AND ', $conditions) . "LIMIT 15"; //concateno l'array esploso 
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

$connessione->close();

?>