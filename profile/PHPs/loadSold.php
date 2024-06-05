<?php

session_start();

require 'config.php';

header('Content-Type: application/json');

$idUtente= $_SESSION['id'];

$sql="SELECT 
s.img_link,s.descrizione,t.taglia,v.guadagno,v.id_vendita, day(v.time) as giorno, month(v.time) as mese,year(v.time) as anno
from vendite_concluse v join taglie_scarpe t on v.id_taglia=t.id join scarpe s on t.scarpa_id =s.id where v.id_utente= '$idUtente' order by v.time desc";

$query=$connessione->query($sql);


$ordini=[];

if($query->num_rows > 0){
    

    while($row = $query->fetch_assoc()){
        $ordini[]=$row;
    };

};


echo json_encode($ordini);

$connessione->close();


?>