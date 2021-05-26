// Liste des Patients et autre (Class) //
export let cimetiere = [];
export let maison = [];


export class Patients {
    constructor(nom, maladie, argent, poche, etatSante, traitement) {
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche
        this.etatSante = etatSante
        this.traitement = traitement
        this.goTo = (place) => {
            place.push(this)
            console.log(`${this.nom} est allé à la ${pharma.nom}`);
        }
        this.paye = () => {
            let prix;
            switch (this.traitement) {
                case "ctrl+maj+f":
                    prix = 60;
                    break;
                case "saveOnFocusChange":
                    prix = 100;
                    break;
                case "CheckLinkRelation":
                    prix = 35;
                    break
                case "ventoline":
                    prix = 40;
                    break
                case "f12+doc":
                    prix = 20;
                    break
            }
            if (prix <= this.argent) {
                console.log(`Le ${this.traitement} de ${this.nom} coûte ${prix}`);
                this.argent -= prix
                maison.push(this)
                console.log(`${this.nom} achéte ${this.traitement}`);
            } else {
                console.log(`Le ${this.traitement} de ${this.nom} coûte ${prix}`);
                console.log(`${this.nom} n'as pas assez d'argent et meurt, il ce trouve actuellement dans le cimetiére `);
                cimetiere.push(this)
                pharma.personnes.shift(this)
            }
        }
        this.takeCare = () => {
            if (this == maison) {
                this.etatSante = "soigné"
                console.log(`${this.nom} est ${this.etatSante}`);
            }
        }
    }
};
// 
export class Docteur {
    constructor(nom, argent, salleAttente, cabinet) {
        this.nom = nom
        this.argent = argent
        this.salleAttente = salleAttente
        this.cabinet = cabinet
        this.diagnostic = () => {
            console.log(`La maladie de ${cabinet[0].nom} est ${cabinet[0].maladie}`);
            let traitement;
            switch (this.cabinet[0].maladie) {
                case "mal indenté":
                    traitement = "ctrl+maj+f";
                    break;
                case "unSave":
                    traitement = "saveOnFocusChange";
                    break;
                case "404":
                    traitement = "CheckLinkRelation";
                    break;
                case "azmatique":
                    traitement = "ventoline";
                    break;
                case "syntaxError":
                    traitement = "f12+doc";
                    break;
            }
            this.cabinet[0].traitement = traitement;
            this.cabinet[0].etatSante = "diagnostiquer";
            console.log(`votre maladie est ${this.cabinet[0].etatSante} votre traitement est ${traitement}`);
            console.log(`${this.cabinet[0].nom} a payé le ${this.nom}`);
            this.cabinet[0].argent -= 50
            this.argent += 50
        }
        this.patientIn = () => {
            console.log(`Dans la salle d'attente il y a ${this.salleAttente.length} personnes`);
            this.cabinet.push(this.salleAttente.shift());
            console.log(`${this.cabinet[0].nom} est entré au cabinet`);
            console.log("Miau");
        }
        this.patientOut = () => {
            console.log(`${this.cabinet[0].nom} a quitté le cabinet`);
            this.salleAttente.push(this.cabinet.pop());
            console.log(`il reste ${this.salleAttente[4].argent}euro à ${this.salleAttente[4].nom}`);
        }
    }
}
export let pharma = {
    nom: "pharmacie",
    personnes: [],
};