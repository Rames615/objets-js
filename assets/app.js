// on declarer une variable objet stagiaire

const stagiaire = {
    nom: 'Trick',
    prenom: 'Ramos',
    age: 25,
    formation: 'développeur web',
    chauve: false,
}                         
console.log(stagiaire.nom, stagiaire.prenom, stagiaire.age, stagiaire.formation, stagiaire.chauve);

// on declarer une variable avec characteristique de chien
const chien = {
    nom: 'Rex',
    age: 5,
    color : 'gris',
    taille: 'moyen',
    vaccination: true,
    utility ()  {
        return 'chien de garde';
    }
}
console.log(chien.nom, chien.age, chien.color, chien.taille, chien.vaccination, chien.utility());


// on declarer une variable avec characteristique de voiture
const voiture = {
    marque: 'Ford',
    model: 'fiesta',
    annee: 2012,
    couleur: 'gris',
    puissance: 125,
    utilite(){
        return 'familiale';
    }
}
console.log(voiture.marque, voiture.model, voiture.annee, voiture.couleur, voiture.puissance, voiture.utilite());

// on declarer une variable avec characteristique de ville
const ville = {
    nom: 'Alfortville',
    pays: 'France',
    population: 2000000,
    habitant(){
        return 'alfortvillois';
    }
}
console.log(ville.nom, ville.pays, ville.population, ville.habitant());

// on declarer une variable avec characteristique de la personne
const personne = {
    nom: 'Trick',
    prenom: 'Ramos',
    age: 25,
    profession: 'développeur web',
    identite(){
        return 'homme';
    }
}
console.log(personne.nom, personne.prenom, personne.age, personne.profession, personne.identite());
