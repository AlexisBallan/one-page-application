class VueListePersonnage{
    constructor() {
        this.html = document.getElementById("html-vue-liste-personnage").innerHTML;
        this.listePersonnageDonnee = null;
    }

    initialiserListePersonnage(listePersonnageDonnee){
        console.log("initialiserListePersonnage ", listePersonnageDonnee);
        this.listePersonnageDonnee = listePersonnageDonnee;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        let listePersonnage = document.getElementById("liste-personnage");
        const listePersonnageItemHTML = listePersonnage.innerHTML;
        let listePersonnageHTMLRemplacement = "";
        
        console.log(this.listePersonnageDonnee);
        for(var numeroPersonnage in this.listePersonnageDonnee){
            let listePersonnageItemHTMLRemplacement = listePersonnageItemHTML;
            console.log(this.listePersonnageDonnee[numeroPersonnage].nom);
            //listePersonnageItemHTMLRemplacement = listePersonnageItemHTMLRemplacement.replace("{Personnage.idModifier}", this.listePersonnageDonnee[numeroPersonnage].id);
            //listePersonnageItemHTMLRemplacement = listePersonnageItemHTMLRemplacement.replace("{Personnage.idModifier}", this.listePersonnageDonnee[numeroPersonnage].id);
            listePersonnageItemHTMLRemplacement = listePersonnageItemHTMLRemplacement.replace("{Personnage.id}", this.listePersonnageDonnee[numeroPersonnage].id);
            listePersonnageItemHTMLRemplacement = listePersonnageItemHTMLRemplacement.replace("{Personnage.nom}", this.listePersonnageDonnee[numeroPersonnage].nom);
            listePersonnageHTMLRemplacement += listePersonnageItemHTMLRemplacement;
        }

        listePersonnage.innerHTML = listePersonnageHTMLRemplacement;
    }
}