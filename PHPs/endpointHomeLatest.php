<?php

    require 'config.php';

    header('Content-Type: application/json');

    $query = 'SELECT * from scarpe order by data_inserimento desc limit 4';
    $result = $connessione->query($query);

    
        if($result->num_rows > 0){
            $products =[];
            while($row = $result->fetch_assoc()){
                $products[] = $row;
            }
        }else{
            echo "nessun prodotto trovato";
        };

    echo json_encode($products);

    $connessione->close();
?>