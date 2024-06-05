<?php
session_start();

require 'config.php';

header('Content-Type: application/json');

$query = "SELECT * FROM utenti WHERE id_utente = '" . $_SESSION['id'] . "'";
$result = $connessione->query($query);

$person = [];
$address = [];
$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $person['name'] = $row['nome'];
        $person['surname'] = $row['cognome'];
        $person['email'] = $row['email'];
    }
}
;

$query = "SELECT * FROM indirizzi WHERE id_utente = '" . $_SESSION['id'] . "'";
$result = $connessione->query($query);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $address['address'] = $row['indirizzo'];
        $address['city'] = $row['citta'];
        $address['state'] = $row['stato'];
        $address['cap'] = $row['cap'];
        $address['tel'] = $row['tel'];
    }
};

$data['person']=$person;
$data['address']=$address;

echo json_encode($data);

$connessione->close();


?>