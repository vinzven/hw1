<?php
session_start();
require 'config.php';

require_once 'stripe-php-14.9.0/init.php';

\Stripe\Stripe::setApiKey('sk_test_51PAwCNHgmvtAWfOQexBBR6KFR3JjDTrsmFnWySWM4ajVswpeG3Ubk77DlJbNTxHeLiSQpx0Z1qg6jIEKIb4RE3rn00jXoXs6hx'); // Imposta la tua chiave segreta Stripe

try {
    // Verifica che l'ID della sessione sia presente nella query string
    if (!isset($_GET['session_id'])) {
        header('Location: http://localhost/HW1/source/index.php');
        exit;
    }

    $sessionId = $_GET['session_id'];

    // Recupera la sessione di checkout da Stripe
    $session = \Stripe\Checkout\Session::retrieve($sessionId);

    // Estrai l'indirizzo di spedizione

    

    if (isset($session->shipping_details) && isset($session->shipping_details->address)) {
            
        print_r($session->shipping_details->address);
        
        
        $shipping_details = $session->shipping_details;
        $address = $shipping_details->address;
        $name = $shipping_details->name;
        
        $line1 = isset($address->line1) ? $address->line1 : null;
        $city = isset($address->city) ? $address->city : null;
        $state = isset($address->state) ? $address->state : null;
        $postalCode = isset($address->postal_code) ? $address->postal_code : null;
        $country = isset($address->country) ? $address->country : null;

            $sql = "INSERT into indirizzi (id_utente,indirizzo,citta,stato,cap) 
            values (' " . $_SESSION['id'] . " ', '$line1' , '$city' ,'$country','$postalCode')";
            $query = $connessione->query($sql);

            echo 'INDIRIZZO AGGIUNTO';
        }
        ;

    // Controlla lo stato del pagamento
    if ($session->payment_status === 'paid') {
        //aggiorno il DB

        $taglia_id = $_SESSION['checkout_product'];

        $sql = "SELECT id_utente, prezzo from vendite_in_corso where id_taglia='$taglia_id' order by prezzo asc, data_pubblicazione asc limit 1";
        $query = $connessione->query($sql);

        if ($query->num_rows > 0) {

            $venditore;
            $prezzo_art;
            $prezzo_acquisto;

            $row = $query->fetch_assoc();

            $venditore = $row['id_utente'];
            $prezzo_art = $row['prezzo'];
            $prezzo_acquisto = $prezzo_art;
            $guadagno = $prezzo_art - 20;
        }
        ;

        //inserisco le vendite concluse
        $sql = "INSERT into vendite_concluse (id_utente,id_taglia,prezzo,guadagno,time) values(' $venditore ', '$taglia_id' ,'$prezzo_art' ,
        $guadagno,NOW() ) ";

        $query = $connessione->query($sql);


        $sql = "DELETE from vendite_in_corso where id_taglia= ' $taglia_id' and id_utente = '$venditore' and prezzo='$prezzo_art' ";
        $query = $connessione->query($sql);

        //aggiorno le taglie scarpe
        $sql = "SELECT id_utente, prezzo from vendite_in_corso where id_taglia='$taglia_id' order by prezzo asc, data_pubblicazione asc limit 1";
        $query = $connessione->query($sql);

        if ($query->num_rows > 0) {

            $row = $query->fetch_assoc();

            $venditore = $row['id_utente'];
            $prezzo_art = $row['prezzo'];
        }
        ;

        $sql = "UPDATE taglie_scarpe set quantita = quantita -1, user_prezzo_minore = '$venditore', prezzo_minore ='$prezzo_art' where id = '$taglia_id' ";
        $query = $connessione->query($sql);

        $sql = "SELECT quantita from taglie_scarpe where id='$taglia_id' ";
        $query = $connessione->query($sql);

        if ($query->num_rows > 0) {
            $row = $query->fetch_assoc();
            $quantity = $row['quantita'];

            if ($quantity <= 0) {
                $sql = "UPDATE taglie_scarpe set user_prezzo_minore = 0, prezzo_minore =0 where id = '$taglia_id' ";
                $query = $connessione->query($sql);
                echo 'SOLD OUT';
            }
        }



        //aggiorno la home page della scarpa
        $sql = "SELECT scarpa_id from taglie_scarpe where id='$taglia_id' ";
        $query = $connessione->query($sql);

        if ($query->num_rows > 0) {

            $row = $query->fetch_assoc();

            $idVenduto = $row["scarpa_id"];
        }
        ;

        $sql = "SELECT min(prezzo_minore) as minprice from taglie_scarpe where scarpa_id='$idVenduto' and  prezzo_minore >=20 ";
        $query = $connessione->query($sql);

        if ($query->num_rows > 0) {

            $row = $query->fetch_assoc();

            $minprice = $row["minprice"];
        }
        ;

        $sql = "UPDATE scarpe set minprice='$minprice',num_vendite=num_vendite + 1 where id='$idVenduto' ";
        $query = $connessione->query($sql);

        //aggiorno ordine cliente
        $prezzo_acquisto = $prezzo_acquisto + 20;
        $sql = "INSERT into ordini (id_acquirente , id_taglia , id_transazione , orario_acquisto , importo , email_acquirente ) values
        (' " . $_SESSION['id'] . " ', '$taglia_id', '$sessionId',NOW(),'$prezzo_acquisto', ' " . $_SESSION['email'] . " ' )";
        $query = $connessione->query($sql);


    


        echo "Pagamento completato con successo. Grazie per il tuo acquisto!";
        header('Location: http://localhost/HW1/source/profile/orders.php');


    } else {
        echo "Pagamento non riuscito. Si prega di riprovare.";
        header('Location: http://localhost/HW1/source/index.php');

    }

} catch (Exception $e) {
    // Gestione degli errori
    echo "Errore: " . $e->getMessage();
}

$connessione->close();
?>