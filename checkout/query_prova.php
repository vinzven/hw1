
<?php

session_start();
require 'config.php';
require_once 'stripe-php-14.9.0/init.php';
\Stripe\Stripe::setApiKey('sk_test_51PAwCNHgmvtAWfOQexBBR6KFR3JjDTrsmFnWySWM4ajVswpeG3Ubk77DlJbNTxHeLiSQpx0Z1qg6jIEKIb4RE3rn00jXoXs6hx'); // Imposta la tua chiav

$productDesc='Nike Dunk Low "Panda" ';
$productSize=39;

$sql="SELECT * from indirizzi where id_utente = ' ".$_SESSION['id']." ' ";
$query=$connessione->query($sql);
if($query->num_rows>0){
    $row = $query->fetch_assoc();

    $customer = \Stripe\Customer::create([
        'email' => $_SESSION['email'],
        'name'=> $_SESSION['name']." ".$_SESSION['surname'],
        'address' => [
            'line1' => $row['indirizzo'],
            'city' => $row['citta'],
            'postal_code' => $row['cap'],
            'country' => $row['stato'],
        ]
    ]);
    echo 'fatto!';

}else{

$customer = \Stripe\Customer::create([
    'email' => $_SESSION['email'],
]);

};

    $connessione->close();
?>