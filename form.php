<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "prace@zatisap.cz, surfingeda@centrum.cz";
    $subject = htmlspecialchars($_POST["subject"]);
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";

    $body = "Jméno: $name\nE-mail: $email\n\nZpráva:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Zpráva byla odeslána.";
    } else {
        http_response_code(500); // označí chybu pro fetch
        echo "Chyba při odesílání.";
    }
}
?>
