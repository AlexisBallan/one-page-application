class VueAjouterPersonnage{
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-personnage").innerHTML;
        this.actionAjouterPersonnage = null;
    }

    initialiserActionAjouterPersonnage(actionAjouterPersonnage){
        this.actionAjouterPersonnage = actionAjouterPersonnage;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-ajouter").addEventListener("submit", evenement => this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();

        let nom = document.getElementById("personnage-nom").value;
        let equipage = document.getElementById("personnage-equipage").value;
        let description = document.getElementById("personnage-description").value;
        let prime = document.getElementById("personnage-prime").value;

        this.actionAjouterPersonnage(new Personnage(nom, equipage, description, prime, null));
    }
}