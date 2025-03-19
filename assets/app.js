// on declarer une variable objet stagiaire

const stagiaire = {
  nom: "Trick",
  prenom: "Ramos",
  age: 25,
  formation: "développeur web",
  chauve: false,
};
console.log(
  stagiaire.nom,
  stagiaire.prenom,
  stagiaire.age,
  stagiaire.formation,
  stagiaire.chauve
);

// on declarer une variable avec characteristique de chien
const chien = {
  nom: "Rex",
  age: 5,
  color: "gris",
  taille: "moyen",
  vaccination: true,
  utility() {
    return "chien de garde";
  },
};
console.log(
  chien.nom,
  chien.age,
  chien.color,
  chien.taille,
  chien.vaccination,
  chien.utility()
);

// on declarer une variable avec characteristique de voiture
const voiture = {
  marque: "Ford",
  model: "fiesta",
  annee: 2012,
  couleur: "gris",
  puissance: 125,
  utilite() {
    return "familiale";
  },
};
console.log(
  voiture.marque,
  voiture.model,
  voiture.annee,
  voiture.couleur,
  voiture.puissance,
  voiture.utilite()
);

// on declarer une variable avec characteristique de ville
const ville1 = {
  nom: "Alfortville",
  pays: "France",
  population: 2000000,
  habitant() {
    return "alfortvillois";
  },
};
console.log(ville1.nom, ville1.pays, ville1.population, ville1.habitant());

//////////////////////////////////////////////////////////////////////////////::

// todo Exercice 1 : Déclaration d'un objet
// Consigne :Créez un objet appelé `personne` qui contient les propriétés suivantes :

const personne = {
  nom: "Dupont",
  prenom: "Jean",
  age: 30,
    // Remplacement de la propriété "ville" par un objet "adresse" : correspond à exercise (7)
    adresse: {
        rue: "15 rue de la Paix",
        codePostal: "69000",
        ville: "Lyon"
    },
 
    // Ajout du tableau "competences" : correspond à exercise (8)
    competences: [
        { nom: "JavaScript", niveau: 4 },
        { nom: "HTML", niveau: 5 },
        { nom: "CSS", niveau: 3 }
    ],

  // Ajout de la méthode sePresenter : correspond à exercise (5)
  sePresenter: function () {
    return `Bonjour, je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans et j'habite à ${this.ville}.`;
  },
};

// todo Exercice 2 :  Accès aux propriétés d'un objet
// En utilisant l'objet `personne` créé dans l'exercice 1, affichez dans la console :

// Accès avec la notation point
console.log(
  "Nom :",
  personne.nom,
  ",",
  "prenom :",
  personne.prenom,
  ",",
  "age :",
  personne.age,
  ",",
  "ville :",
  personne.ville
);
// Accès avec la notation crochets
console.log(
  "Nom :",
  personne["nom"],
  ",",
  "prenom :",
  personne["prenom"],
  ",",
  "age :",
  personne["age"],
  ",",
  "ville :",
  personne["ville"]
);

// todo Exercice 3 :  Modification des propriétés
// Consigne : Modifiez l'objet `personne` pour :

personne.age = 31;
personne.ville = "lyon";

console.log(
  "Nom :",
  personne.nom,
  ",",
  "prenom :",
  personne.prenom,
  ",",
  "age :",
  personne.age,
  ",",
  "ville :",
  personne.ville
);

// todo Exercice 4 :  Ajout de propriétés
// Consigne : Ajoutez à l'objet `personne` les propriétés suivantes :

personne.email = "jean.dupont@email.com";
personne.telephone = "07 12 34 56 78";
console.log(personne);

// todo Exercice 5 :  Méthodes d'objet
// Consigne :  Ajoutez à l'objet `personne` une méthode appelée `sePresenter` qui affiche dans la console : "Bonjour, je m'appelle [prenom] [nom], j'ai [age] ans et j'habite à [ville]."

// appel de la méthode

console.log(personne.sePresenter());

// todo Exercice 6 :  Parcourir un objet
// Consigne : Écrivez une fonction qui affiche toutes les propriétés et valeurs de l'objet `personne`, à l'exception des méthodes. Utilisez une boucle `for...in`.

for (let prop in personne) {
  console.log(prop, personne[prop]);
}

// todo Exercice 7 :  Objets imbriqués
// Consigne : Modifiez l'objet `personne` pour remplacer la propriété `ville` par une propriété `adresse` qui est elle-même un objet avec les propriétés :

console.log(`Adresse complète : ${personne.adresse.rue}, ${personne.adresse.codePostal}, ${personne.adresse.ville}`
);

// todo Exercice 8 :  Tableaux d'objetset
// Consigne : Créez un tableau appelé `competences` qui contient trois objets. Chaque objet a deux propriétés :

// console.log(personne.competences);

console.log("Compétences de la personne :");
personne.competences.forEach(competence => {
    console.log(`- ${competence.nom} (Niveau : ${competence.niveau})`);
});


// todo Exercice 9 :  Déstructuration d'objets
// Consigne : Utilisez la déstructuration pour extraire les propriétés `nom`, `prenom` et `email` de l'objet `personne` dans des variables séparées. Puis affichez ces variables dans la console.

// Déstructuration de l'objet personne
const { nom, prenom, email } = personne;

// Affichage des variables extraites
console.log(`Nom : ${nom}`);
console.log(`Prénom : ${prenom}`);
console.log(`Email : ${email}`);


// todo Exercice 10 : Object.keys, Object.values et Object.entries
// Consigne :

// 1. Afficher toutes les clés de l'objet (propriétés de premier niveau uniquement)
console.log("Clés de l'objet personne :", Object.keys(personne));

// 2. Afficher toutes les valeurs de l'objet (premier niveau uniquement)
console.log("Valeurs de l'objet personne :", Object.values(personne));

// 3. Afficher toutes les paires clé-valeur de l'objet
console.log("Paires clé-valeur de l'objet personne :", Object.entries(personne));