// Liste des Patients et autre (Class) //

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

let docteur ={
    nom : "Debugger",
    argent : 0,
    cabinet : ["Chat"],
    diagnostic(){

    },
    patientIn(){

    },
    patientOut(){

    }
};

//export des  et autres //
export {Patients,Marcus,Optimus,Sangoku,DarthVader,Semicolon};
//

//la liste des lieux (Class)//

class Lieu {
    constructor(nom,personnes)
};