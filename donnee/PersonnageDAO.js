class PersonnageDAO{
    constructor(){
        this.URL = "http://51.79.64.98/one-page-application/API/";
    }

    lister(action){
        var ajax = new XMLHttpRequest();
        ajax.open('GET', this.URL + 'listerPersonnage.php', true);
        var reponse = "";
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                reponse = JSON.parse(ajax.responseText);
                action(reponse);
            }
        }
        ajax.send("");
    }

    ajouter(personnage){
        if(this.listePersonnage.length > 0)
        personnage.id = this.listePersonnage[this.listePersonnage.length - 1].id + 1;
        else
        personnage.id = 0;

        this.listePersonnage[personnage.id] = personnage;

        localStorage['personnage'] = JSON.stringify(this.listePersonnage);
        console.log("JSON.stringify(this.listePersonnage) : " + JSON.stringify(this.listePersonnage));
    }

    modifier(personnage){

        if(localStorage['personnage']){
            this.listePersonnage = JSON.parse(localStorage['personnage']);
        }
        
        this.listePersonnage[personnage.id].nom = personnage.nom;
        this.listePersonnage[personnage.id].equipage = personnage.equipage;
        this.listePersonnage[personnage.id].description = personnage.description;
        this.listePersonnage[personnage.id].prime = personnage.prime;


        localStorage['personnage'] = JSON.stringify(this.listePersonnage);
        console.log("JSON.stringify(this.listePersonnage) : " + JSON.stringify(this.listePersonnage));
    }
}