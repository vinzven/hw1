<?php


    $host="127.0.0.1";
    $user="root";
    $password="";
    $db="mysite";

    $connessione = new mysqli($host,$user,$password,$db);

    if($connessione===false){
        die("Errore connessione al DB " . $connessione->connect_error);
    };

?>
