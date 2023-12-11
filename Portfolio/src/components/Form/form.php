<?php

$nome  = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$numero = addslashes($_POST['number']);

$para = 'codemind@ryancavalcanti.com';
$assunto = 'Formulário Site - Ryan Cavalcanti';

$corpo = "Nome :" . $nome . PHP_EOL . "Email: " . $email . PHP_EOL . "Telefone: " . $numero;

$cabecalho = "From: Ryancavalcanti192@gmail.com" . PHP_EOL . "Reply-to: " . $email . PHP_OS . "X=Mailer:PHP/" . phpversion();

if (mail($para, $assunto, $corpo, $cabecalho)) {
    echo ("E-mail enviado com sucesso!");
} else {
    echo ("Houve um erro ao enviar o email!");
}
