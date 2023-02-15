class PersonnageDAO{
    constructor(){
        /*this.listePersonnage = [
            {nom:"Luffy au chapeaux de paille", equipage:"Équipage des mugiwara", description:"Un des 4 empereurs des mers", prime:"3.000.000.000", id:0},
            {nom:"Silvers Rayleigh", equipage:"Équipage de Roger", description:"Le seigneur des ténébres, ex bras droit du seigneur des pirates", prime:"inconnu", id:1},
            {nom:"Luffy au chapeaux de paille", equipage:"Équipage des mugiwara", description:"Un des 4 empereurs des mers", prime:"3.000.000.000", id:0},
        ];*/
        this.listePersonnage = [];
    }

    lister(){
        if(localStorage['personnage']){
            this.listePersonnage = JSON.parse(localStorage['personnage']);
        }

        for(let position in this.listePersonnage){
            let personnage = new Personnage(this.listePersonnage[position].nom,
                this.listePersonnage[position].equipage,
                this.listePersonnage[position].description,
                this.listePersonnage[position].prime,
                this.listePersonnage[position].id,)
                
            this.listePersonnage[personnage.id] = personnage;
        }
        return this.listePersonnage;
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