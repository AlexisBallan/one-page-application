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
        this.window.location.hash = "#";
    }

    actionModifierPersonnage(personnage){
        this.personnageDAO.modifier(personnage);
        this.window.location.hash = "#";
    }

    naviguer(){
        let hash = this.window.location.hash;
        if(!hash){
            this.vueListePersonnage.initialiserListePersonnage(this.personnageDAO.lister());
            this.vueListePersonnage.afficher();
        } else if(hash.match(/^#ajouter-personnage/)){
            this.vueAjouterPersonnage.afficher();
        } else if(hash.match(/^#modifier-personnage+/)){
            let navigation = hash.match(/^#modifier-personnage\/([0-9]+)/);
            let idPersonnage = navigation[1];

            this.vueModifierPersonnage.initialiserPersonnage(this.personnageDAO.lister()[idPersonnage]);
            this.vueModifierPersonnage.afficher();
        } else {
            let navigation = hash.match(/^#personnage\/([0-9]+)/);
            let idPersonnage = navigation[1];

            this.vuePersonnage.initialiserPersonnage(this.personnageDAO.lister()[idPersonnage]);
            
            this.vuePersonnage.afficher();
        }
    }

    
}

new Application(window, new VueListePersonnage(), new VueAjouterPersonnage(), new PersonnageDAO(), new VuePersonnage(), new VueModifierPersonnage());