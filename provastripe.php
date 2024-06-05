<?php

require_once 'PHPs/stripe-php-14.9.0/init.php';

$stripe = new \Stripe\StripeClient('sk_test_51PAwCNHgmvtAWfOQexBBR6KFR3JjDTrsmFnWySWM4ajVswpeG3Ubk77DlJbNTxHeLiSQpx0Z1qg6jIEKIb4RE3rn00jXoXs6hx');

$customer = $stripe->customers->create([
    'description' => 'example customer',
    'email' => 'email@example.com',
    'payment_method' => 'pm_card_visa',
]);

echo $customer->description;






?>