<?php
    header("Access-Control-Allow-Origin: *");

    include "../donnee/personnageDAO.php";

    $IdPersonnage = filter_var($_POST['id'], FILTER_VALIDATE_INT);

    $personnage = PersonnageDAO::detaillerPersonnage($IdPersonnage);

    $json = json_encode($personnage);

    echo $json;
?>