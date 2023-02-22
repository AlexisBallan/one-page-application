
<?php
	header("Access-Control-Allow-Origin: *");
	include "../donnee/personnageDAO.php";
	
	$factures = PersonnageDAO::listerPersonnage();

	$json = json_encode($factures);

	echo $json;

?>