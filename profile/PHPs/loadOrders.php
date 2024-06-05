<?php

session_start();

require 'config.php';

header('Content-Type: application/json');

$idUtente= $_SESSION['id'];

$sql="SELECT s.img_link,s.descrizione,t.taglia,o.importo,o.id, day(o.orario_acquisto) as giorno, month(o.orario_acquisto) as mese,year(o.orario_acquisto) as anno 
from scarpe s join taglie_scarpe t on s.id=t.scarpa_id join ordini o on t.id =o.id_taglia where o.id_acquirente='$idUtente'order by o.orario_acquisto desc";

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