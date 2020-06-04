<?php
$to = "contact@yepeducation.com";
$subject = $_POST['your_name'];
$txt = $_POST['your_message'];
$headers = "From: ".$_POST['your_email'];

mail($to,$subject,$txt,$headers);
header('Location: ../contact.html');
?>