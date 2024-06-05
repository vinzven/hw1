<?php
session_start();
require 'config.php';



if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $formType = $_POST['form-type'];

    if ($formType == 'register') {

        $name = mysqli_real_escape_string($connessione, $_POST['register-name']);
        $surname = mysqli_real_escape_string($connessione, $_POST['register-surname']);
        $email = mysqli_real_escape_string($connessione, $_POST['register-email']);
        $password = mysqli_real_escape_string($connessione, $_POST['register-password']);
        $confirmPassword = mysqli_real_escape_string($connessione, $_POST['register-confirm-password']);

        // Validazione dei campi di registrazione
        if (empty($name) || empty($surname) || empty($email) || empty($password) || empty($confirmPassword)) {
            echo "Tutti i campi sono obbligatori.";
            $_SESSION['error']=1;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        }

        //verifico correttezza mail lato server
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "L'indirizzo email non è valido.";
            $_SESSION['error']=1;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        }

        $ricerca_email="SELECT * from utenti where email ='$email' ";
        $ricerca=$connessione->query($ricerca_email);
        if($ricerca->num_rows > 0) {
            echo "email gia in uso";
            $_SESSION['error']=1;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        };

        if ($password !== $confirmPassword) {
            echo "Le password non coincidono.";
            $_SESSION['error']=1;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        };

        // Lunghezza minima
        if (strlen($password) < 8) {
            echo "La password deve contenere almeno 8 caratteri.";
            $_SESSION['error']=1;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        };
        
        // Complessità: almeno una lettera maiuscola
        if (!preg_match('/[A-Z]/', $password)) {
            echo "La password deve contenere almeno una lettera maiuscola.";
            $_SESSION['error']=1;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        };
        
        // Complessità: almeno una lettera minuscola
        if (!preg_match('/[a-z]/', $password)) {
            echo "La password deve contenere almeno una lettera minuscola.";
            $_SESSION['error']=1;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        };
        
        // Complessità: almeno un numero
        if (!preg_match('/[0-9]/', $password)) {
            echo "La password deve contenere almeno un numero.";
            $_SESSION['error']=1;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        };
        
        // Complessità: almeno un carattere speciale
        if (!preg_match('/[^a-zA-Z0-9]/', $password)) {
            echo "La password deve contenere almeno un carattere speciale.";
            $_SESSION['error']=1;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        };
        
        // Se tutte le condizioni sono soddisfatte, la password è considerata forte
        echo "La password è valida.";
        
        


        //hashing della password con sicurezza bcrypt tramite password_default
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO utenti (nome, cognome, email, password) VALUES ('$name', '$surname', '$email', '$hashedPassword')";

        if ($connessione->query($sql) === TRUE) {
            echo "Registrazione avvenuta con successo!";
            $_SESSION['error']=3;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        };

    } elseif ($formType == 'login') {
        // Gestisci il login
        $email = mysqli_real_escape_string($connessione, $_POST['login-email']);
        $password = mysqli_real_escape_string($connessione, $_POST['login-password']);

        // Validazione dei campi di login
        if (empty($email) || empty($password)) {
            echo "Tutti i campi sono obbligatori.";
            $_SESSION['error']=2;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "L'indirizzo email non è valido.";
            $_SESSION['error']=2;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        }

        // Verifica le credenziali dell'utente nel database
        $sql = "SELECT * FROM utenti WHERE email = '$email' ";
        $result = $connessione->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $hashedPassword = $row['password'];

            if (password_verify($password, $hashedPassword)) {
                echo "Login avvenuto con successo!";

                $_SESSION['email'] = $email;
                $_SESSION['name'] = $row['nome'];
                $_SESSION['surname'] = $row['cognome'];
                $_SESSION['id'] = $row['id_utente'];

                header('Location: http://localhost/HW1/source/profile/myProfile.php');

                exit;
            } else {
                echo "Password errata.";
                $_SESSION['error']=2;
                header('Location: http://localhost/HW1/source/login.php');
                exit;
            }
        } else {
            echo "Nessun utente trovato con questo indirizzo email.";
            $_SESSION['error']=2;
            header('Location: http://localhost/HW1/source/login.php');
            exit;
        }
    } else {
        // Gestisci il caso in cui il tipo di form non è riconosciuto
        echo "Tipo di form non riconosciuto.";
        header('Location: http://localhost/HW1/source/login.php');
        exit;
    }

    $connessione->close();
}
?>