<?php
class PersonnageDAO{
    
    public static function listerPersonnage(){
        include "../connexion/connexion.php";

        $SQL_PERSONNAGE = "SELECT * FROM personnage";
    
        $requete = $basededonnees->prepare($SQL_PERSONNAGE);
        $requete->execute();
        $personnages = $requete->fetchAll(PDO::FETCH_OBJ);
            
        return $personnages;
    }

    public static function ajouterPersonnage($personnage){
        include "../connexion/connexion.php";

        $SQL_AJOUTER_PERSONNAGE = "INSERT into personnage(nom, equipage, description, prime) VALUES(:nom, :equipage, :description, :prime)";
            
        $requete = $basededonnees->prepare($SQL_AJOUTER_PERSONNAGE);
        $requete->bindValue(':nom', $personnage->nom, PDO::PARAM_STR);
        $requete->bindValue(':equipage', $personnage->equipage, PDO::PARAM_STR);
        $requete->bindValue(':description', $personnage->description, PDO::PARAM_STR);
        $requete->bindValue(':prime', $personnage->prime, PDO::PARAM_INT);

        $requete->execute();
    }

    public static function detaillerPersonnage($idPersonnage){
        include "../connexion/connexion.php";

        $SQL_DETAIL_PERSONNAGE = "SELECT * FROM personnage WHERE id = :id";

        $requete = $basededonnees->prepare($SQL_DETAIL_PERSONNAGE);
        $requete->bindParam(':id', $idPersonnage, PDO::PARAM_INT);
        $requete->execute();
        $personnage = $requete->fetchAll(PDO::FETCH_OBJ);

        return $personnage;
    }

    public static function modifierPersonnage($id, $personnage){
        include "../connexion/connexion.php";

        $SQL_MODIFIER_PERSONNAGE = "UPDATE personnage SET nom = :nom, equipage = :equipage, description = :description, prime = :prime WHERE id = :id";

        $requete = $basededonnees->prepare($SQL_MODIFIER_PERSONNAGE);
        $requete->bindValue(':nom', $personnage->nom, PDO::PARAM_STR);
        $requete->bindValue(':equipage', $personnage->equipage, PDO::PARAM_STR);
        $requete->bindValue(':description', $personnage->description, PDO::PARAM_STR);
        $requete->bindValue(':prime', $personnage->prime, PDO::PARAM_INT);
        $requete->bindParam(':id', $id, PDO::PARAM_INT);
        $requete->execute();
    }
}



?>