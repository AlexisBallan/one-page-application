<?php
header("Access-Control-Allow-Origin: *");

include "../modele/personnage.php";
include "../donnee/personnageDAO.php";

PersonnageDAO::ajouterPersonnage(new Personnage($_POST));
?>