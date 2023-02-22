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
        
        console.log("liste persodtcf", this.listePersonnageDonnee);
        console.log(this.listePersonnageDonnee[0]);
        
        for(var personnage of this.listePersonnageDonnee){
            let listePersonnageItemHTMLRemplacement = listePersonnageItemHTML;
            console.log("test", personnage.nom);
            //listePersonnageItemHTMLRemplacement = listePersonnageItemHTMLRemplacement.replace("{Personnage.idModifier}", this.listePersonnageDonnee[numeroPersonnage].id);
            //listePersonnageItemHTMLRemplacement = listePersonnageItemHTMLRemplacement.replace("{Personnage.idModifier}", this.listePersonnageDonnee[numeroPersonnage].id);
            listePersonnageItemHTMLRemplacement = listePersonnageItemHTMLRemplacement.replace("{Personnage.id}", personnage.id);
            listePersonnageItemHTMLRemplacement = listePersonnageItemHTMLRemplacement.replace("{Personnage.nom}", personnage.nom);
            listePersonnageHTMLRemplacement += listePersonnageItemHTMLRemplacement;
        }

        listePersonnage.innerHTML = listePersonnageHTMLRemplacement;
    }
}