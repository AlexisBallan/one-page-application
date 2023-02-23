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

    chercher(id, action){
        console.log("id ", id);
        var ajax = new XMLHttpRequest();
        ajax.open('POST', this.URL + 'detailPersonnage.php', true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send("id="+id);
        var reponse = "";
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                reponse = JSON.parse(ajax.responseText);
                action(reponse[0]);
            }
        }
        
    }

    ajouter(personnage){
        var ajax = new XMLHttpRequest();
        ajax.open('POST', this.URL + 'ajouterPersonnage.php', true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send("nom="+personnage.nom+"&equipage="+personnage.equipage+"&description="+personnage.description+"&prime="+personnage.prime);
    }

    modifier(personnage){
        var ajax = new XMLHttpRequest();
        ajax.open('POST', this.URL + 'modifierPersonnage.php', true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send("id="+personnage.id+"&nom="+personnage.nom+"&equipage="+personnage.equipage+"&description="+personnage.description+"&prime="+personnage.prime);
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                console.log(ajax.responseText);
            }
        }
    }
}