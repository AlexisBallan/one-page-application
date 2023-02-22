<?php
header("Access-Control-Allow-Origin: *");

include "../modele/personnage.php";
include "../donnee/personnageDAO.php";

$IdPersonnage = filter_var($_POST['id'], FILTER_VALIDATE_INT);

PersonnageDAO::modifierPersonnage($IdPersonnage, new Personnage($_POST));
?>