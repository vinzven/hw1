<?php

require 'config.php';

$id=$_POST['listing_id'];

$sql="DELETE from vendite_in_corso where id_vendita ='$id' ";
$connessione->query($sql);

header('Location: http://localhost/HW1/source/profile/sellings.php?query=listing_deleted');
$connessione->close();

?>