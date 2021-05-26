// Liste des Patients (Class) //

class Patients {
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche
        this.etatSante = etatSante
        this.traitement = traitement
        this.goTo=()=>{

        }
        this.takeCare=()=>{

        }
        this.paye=()=>{

        }
    }
};
class Marcus extends Patients {
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        super(nom,maladie,argent,poche,etatSante,traitement)
    }
};
class Optimus extends Patients {
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        super(nom,maladie,argent,poche,etatSante,traitement)
    }
};
class Sangoku extends Patients {
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        super(nom,maladie,argent,poche,etatSante,traitement)
    }
};
class DarthVader extends Patients {
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        super(nom,maladie,argent,poche,etatSante,traitement)
    }
};
class Semicolon extends Patients {
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        super(nom,maladie,argent,poche,etatSante,traitement)
    }
};
// 

//export des patients//
export {Patients,Marcus,Optimus,Sangoku,DarthVader,Semicolon};
//

//