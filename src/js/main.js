import { Patients, Docteur } from "./class.js";
import { pharma } from "./class.js";

let marcus = new Patients("Marcus", "mal indenté", 100, "vide", "malade",);
let optimus = new Patients("Optimus", "unsave", 200, "vide", "malade",);
let sangoku = new Patients("Sangoku", "404", 80, "vide", "malade",);
let darthvader = new Patients("DarthVader", "azmatique", 110, "vide", "malade",);
let semicolon = new Patients("Semicolon", "syntaxError", 60, "vide", "malade",);
let doc = new Docteur("Debuggr", 0, [marcus, optimus, sangoku, darthvader, semicolon], []);


doc.salleAttente.forEach(element => {
    doc.patientIn()
    doc.diagnostic()
    doc.patientOut()
    doc.salleAttente[4].goTo(pharma.personnes)
    pharma.personnes[0].paye()
    console.log("___________");

});

