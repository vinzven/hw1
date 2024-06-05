<?php



require_once 'stripe-php-14.9.0/init.php';

require 'config.php';

session_start(); // Inizializza la sessione

\Stripe\Stripe::setApiKey('sk_test_51PAwCNHgmvtAWfOQexBBR6KFR3JjDTrsmFnWySWM4ajVswpeG3Ubk77DlJbNTxHeLiSQpx0Z1qg6jIEKIb4RE3rn00jXoXs6hx'); // Imposta la tua chiave segreta Stripe

header('Content-Type: application/json');

try {
    // Verifica che la richiesta sia di tipo POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405); // Metodo non permesso
        echo json_encode(['error' => 'Metodo non permesso']);
    }

    // Verifica se l'utente è loggato
    if (!isset($_SESSION['id'])) {
        http_response_code(401); // Non autorizzato
        echo json_encode(['error' => 'Utente non loggato']);
    }

    // Recupera i dati inviati nel body della richiesta
    $input = json_decode(file_get_contents('php://input'), true);

    // Estrai il productDesc e productSize dal corpo della richiesta
    $productDesc = $input['productDesc'];
    $productSize = $input['productSize'];

    // Verifica che productDesc e productSize non siano vuoti
    if (empty($productDesc) || empty($productSize)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Descrizione del prodotto e taglia sono obbligatori']);
        exit;
    }

    // Recupera i dati del prodotto e del cliente dalla sessione
    $customerEmail = $_SESSION['email'];
    $sessionID=$_SESSION['id'];




    $sql="SELECT * from indirizzi where id_utente = '$sessionID' ";
    $query=$connessione->query($sql);
    if($query->num_rows>0){
        $row = $query->fetch_assoc();

        $customer = \Stripe\Customer::create([
            'email' => $customerEmail,
            'name'=> $_SESSION['name']." ".$_SESSION['surname'],
            'address' => [
                'line1' => $row['indirizzo'],
                'city' => $row['citta'],
                'postal_code' => $row['cap'],
                'country' => $row['stato'],
            ]
        ]);

    }else{

    $customer = \Stripe\Customer::create([
        'email' => $customerEmail,
    ]);

};





    $sql="SELECT t.id ,t.prezzo_minore FROM taglie_scarpe t join scarpe s on s.id=t.scarpa_id where s.descrizione='$productDesc' and t.taglia='$productSize'";
    $query=$connessione->query($sql);

    if ($query->num_rows > 0) {
        $product=[];

        $row=$query->fetch_assoc();

        $product['id']= $row['id'];
        $product['prezzo_minore']= $row['prezzo_minore'];
    };

    $_SESSION['checkout_product']=$product['id'];
    $_SESSION['checkout_prezzo']=$product['prezzo_minore'];




    $url=$_SESSION['last_visited'];

    // Crea una sessione di checkout su Stripe
    $sessionOptions = [
        'payment_method_types' => ['card','paypal'],
        'line_items' => [[
            'price_data' => [
                'currency' => 'eur',
                'product_data' => [
                    'name' => $productDesc . ' - ' . $productSize, // Usa productDesc e productSize
                    'description' => 'Shipping costs, taxes, VAT included in the total price: €20',
                ],
                'unit_amount' => $product['prezzo_minore']*100 + 2000, // Sostituisci con l'importo corretto in centesimi
            ],
            'quantity' => 1,
        ]],
       
        'mode' => 'payment',
        'customer' => $customer->id, // Associa il cliente alla sessione di checkout
        'success_url' => 'http://localhost/HW1/source/checkout/success.php?session_id={CHECKOUT_SESSION_ID}',
        'cancel_url' => 'http://localhost'.$_SESSION['last_visited'],
    ];

    // Aggiungi l'opzione di raccogliere l'indirizzo di spedizione solo se l'utente non ha un indirizzo di spedizione registrato
    $sql="SELECT * from indirizzi where id_utente = '$sessionID' ";
    $query=$connessione->query($sql);


    if (($query->num_rows)==0) {
        $sessionOptions['shipping_address_collection'] = [
            'allowed_countries' => ['IT','FR','DE'], // Consentire tutte le nazioni come destinazioni di spedizione
        ];
    };
  

    // Crea la sessione di checkout su Stripe con le opzioni appropriate
    $session = \Stripe\Checkout\Session::create($sessionOptions);

    // Rispondi con l'URL della sessione di checkout
    echo json_encode(['url' => $session->url]);

} catch (Exception $e) {
    // Gestione degli errori
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
$connessione->close();
?>
