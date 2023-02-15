class VuePersonnage{
    constructor(){
        this.html = document.getElementById("html-vue-personnage").innerHTML;
        this.personnage = null;
    }

    initialiserPersonnage(personnage){
        this.personnage = personnage;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        
        document.getElementById("personnage-nom").innerHTML = this.personnage.nom;
        document.getElementById("personnage-equipage").innerHTML = this.personnage.equipage;
        document.getElementById("personnage-description").innerHTML = this.personnage.description;
        document.getElementById("personnage-prime").innerHTML = this.personnage.prime;

    }
}