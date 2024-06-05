<?php
session_start();

// Reindirizza all'ultimo URL visitato, se disponibile
if (isset($_SESSION['last_visited'])) {
    $redirect_url = $_SESSION['last_visited'];
} else {
    // Se non è disponibile, reindirizza alla homepage o a un'altra pagina di default
    $redirect_url = 'http://localhost/HW1/source/index.php';
}

session_unset();

session_destroy();

header("Location: $redirect_url");
exit();
?>
