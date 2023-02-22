<?php

class Personnage
{
	public static $filtres = 
		array(
			'id' => FILTER_VALIDATE_INT,
			'nom' => FILTER_SANITIZE_STRING,
            'equipage' => FILTER_SANITIZE_STRING,
            'description' => FILTER_SANITIZE_STRING,
            'prime' => FILTER_VALIDATE_INT
		);
		
	protected $nom;
    protected $equipage;
    protected $description;
    protected $prime;
	
	public function __construct($tableau)
	{
		$tableau = filter_var_array($tableau, Personnage::$filtres);

		$this->id = $tableau['id'];
		$this->nom = $tableau['nom'];
		$this->equipage = $tableau['equipage'];
        $this->description = $tableau['description'];
        $this->prime = $tableau['prime'];
	}
	
	public function __set($propriete, $valeur)
	{
		switch($propriete)
		{
			case 'id':
				$this->id = $valeur;
			break;
			case 'nom':
				$this->nom = $valeur;
			break;
			case 'equipage':
				$this->equipage = $valeur;
			break;
            case 'description':
				$this->description = $valeur;
			break;
            case 'prime':
				$this->prime = $valeur;
			break;
		}
	}

	public function __get($propriete)
	{
		$self = get_object_vars($this);
		return $self[$propriete];
	}	
}
?>