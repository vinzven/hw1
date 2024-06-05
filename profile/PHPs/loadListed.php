<?php

session_start();

require 'config.php';

header('Content-Type: application/json');

$idUtente= $_SESSION['id'];

$sql="SELECT 
s.img_link,s.descrizione,t.taglia,v.prezzo,v.id_vendita, day(v.data_pubblicazione) as giorno, month(v.data_pubblicazione) as mese,year(v.data_pubblicazione) as anno
from vendite_in_corso v join taglie_scarpe t on v.id_taglia=t.id join scarpe s on t.scarpa_id =s.id where v.id_utente= '$idUtente' order by v.data_pubblicazione desc";

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