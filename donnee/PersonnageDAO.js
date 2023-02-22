class PersonnageDAO{
    constructor(){
        this.URL = "http://51.79.64.98/one-page-application/API/";
    }/*
    lister(action){
        fetch(this.URL + 'Jayson')
          .then(response => response.json())
          .then(data =>
            {
              console.log(data);
              let listeJeux = [];
              for(let position in data){
                let jeux = new Jeux(data[position].nom,
                                        data[position].marque,
                                        data[position].description,
                                        data[position].prix,
                                        data[position].couleur,
                                        data[position].id);
    
                console.log(jeux);
                listeJeux.push(jeux);
              }
              action(listeJeux);
            });
      }*/

    lister(){
        let listePersonnage = [];
        fetch(this.URL + 'listerPersonnage.php')
            .then(response => response.json())
            .then(data =>
                {
                    console.log(data);
                    //console.log(JSON.parse(data));
                    for(let position in data){
                        let personnage = new Personnage(data[position].nom,
                                data[position].equipage,
                                data[position].description,
                                data[position].prime,
                                data[position].id);

                        console.log(personnage);
                        listePersonnage[listePersonnage.length] = personnage;
                    }
                    
                });
        //console.log(listePersonnage);
        return listePersonnage;

        /*if(localStorage['personnage']){
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
        return this.listePersonnage;*/
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