class VueModifierPersonnage{
    constructor() {
        this.html = document.getElementById("html-vue-modifier-personnage").innerHTML;
        this.actionModifierPersonnage = null;
    }

    initialiserPersonnage(personnage){
        this.personnage = personnage;
    }

    initialiserActionModifierPersonnage(actionModifierPersonnage){
        this.actionModifierPersonnage = actionModifierPersonnage;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-modifier").addEventListener("submit", evenement => this.enregistrer(evenement));

        document.getElementById("personnage-nom").innerHTML = this.personnage.nom;
        document.getElementById("personnage-equipage").innerHTML = this.personnage.equipage;
        document.getElementById("personnage-description").innerHTML = this.personnage.description;
        document.getElementById("personnage-prime").innerHTML = this.personnage.prime;
    }

    enregistrer(){
        //evenement.preventDefault();

        let nom = document.getElementById("personnage-nom").value;
        let equipage = document.getElementById("personnage-equipage").value;
        let description = document.getElementById("personnage-description").value;
        let prime = document.getElementById("personnage-prime").value;

        this.actionModifierPersonnage(new Personnage(nom, equipage, description, prime, this.personnage.id));
    }
}