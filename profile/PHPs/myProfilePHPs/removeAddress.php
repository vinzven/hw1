<?php
session_start();
require 'config.php';


$sql="DELETE from indirizzi where id_utente=".$_SESSION['id'];

$query=$connessione->query($sql);

header('Location: http://localhost/HW1/source/profile/myProfile.php');

$connessione->close();
?>