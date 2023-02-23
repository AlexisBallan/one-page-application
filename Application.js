class Application{
    constructor(window, vueListePersonnage, vueAjouterPersonnage, personnageDAO, vuePersonnage, vueModifierPersonnage){
        this.window = window;
        
        this.vueListePersonnage = vueListePersonnage;
        this.vueAjouterPersonnage = vueAjouterPersonnage;
        this.personnageDAO = personnageDAO;
        this.vuePersonnage = vuePersonnage;
        this.vueModifierPersonnage = vueModifierPersonnage;

        this.vueAjouterPersonnage.initialiserActionAjouterPersonnage(personnage => this.actionAjouterPersonnage(personnage));
        this.vueModifierPersonnage.initialiserActionModifierPersonnage(personnage => this.actionModifierPersonnage(personnage));

        this.window.addEventListener("hashchange", () => this.naviguer());
        this.naviguer();
    }

    actionAjouterPersonnage(personnage){
        this.personnageDAO.ajouter(personnage);

        setTimeout(this.changerLocation, 100);
    }

    actionModifierPersonnage(personnage){
        this.personnageDAO.modifier(personnage);
        setTimeout(this.changerLocation, 100);
    }

    changerLocation(){
        this.window.location.hash = "#";
    }

    afficherNouvelleListePersonnage(listerPersonnage){
        this.vueListePersonnage.initialiserListePersonnage(listerPersonnage);
        this.vueListePersonnage.afficher();
    }

    afficherNouveauPersonnage(personnage){
        this.vuePersonnage.initialiserPersonnage(personnage);
        this.vuePersonnage.afficher();
    }

    afficherPersonnageAModifier(personnage){
        this.vueModifierPersonnage.initialiserPersonnage(personnage);
        this.vueModifierPersonnage.afficher();
    }

    naviguer(){
        let hash = this.window.location.hash;
        if(!hash){
            console.log("tes ici");
            this.personnageDAO.lister((listePersonnage) => this.afficherNouvelleListePersonnage(listePersonnage));
        } 
        else if(hash.match(/^#ajouter-personnage/)){
            this.vueAjouterPersonnage.afficher();
        } else if(hash.match(/^#modifier-personnage+/)){
            let navigation = hash.match(/^#modifier-personnage\/([0-9]+)/);
            let idPersonnage = navigation[1];
            this.personnageDAO.chercher(idPersonnage, (personnage) => this.afficherPersonnageAModifier(personnage));
            
        } else {
            let navigation = hash.match(/^#personnage\/([0-9]+)/);
            let idPersonnage = navigation[1];
            this.personnageDAO.chercher(idPersonnage, (personnage) => this.afficherNouveauPersonnage(personnage));
        }
    }    
}

new Application(window, new VueListePersonnage(), new VueAjouterPersonnage(), new PersonnageDAO(), new VuePersonnage(), new VueModifierPersonnage());