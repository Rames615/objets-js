
// todo Exercice 1 : Déclaration d'un objet
// Consigne :Créez un objet appelé `personne` qui contient les propriétés suivante
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

// console.log(personne.sePresenter());

personne.presentation = function () {
  console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans et j'habite à ${this.adresse.ville}.`) ; // correspond à exercise (7)
};

personne.presentation();

// todo Exercice 6 :  Parcourir un objet
// Consigne : Écrivez une fonction qui affiche toutes les propriétés et valeurs de l'objet `personne`, à l'exception des méthodes. Utilisez une boucle `for...in`.

for (let prop in personne) {
  console.log(prop, personne[prop]);
}
//  function afficherProprietes(personne) {
// for (let prop in personne) {
//     if (typeof personne[prop] !== "function") {
//       //si le type des rpropriétés n'est pas une fonction
//         console.log(`${prop} : ${personne[prop]}`);
//     }
// }
// }
// afficherProprietes(personne);

// todo Exercice 7 :  Objets imbriqués
// Consigne : Modifiez l'objet `personne` pour remplacer la propriété `ville` par une propriété `adresse` qui est elle-même un objet avec les propriétés :
 delete personne.ville;
personne.adresse = {
    rue: "15 rue de la Paix",
    codePostal: "69000",
    ville: "Lyon"
};
console.log(`Adresse complète : ${personne.adresse.rue}, ${personne.adresse.codePostal}, ${personne.adresse.ville}`
);
console.log(personne);

// todo Exercice 8 :  Tableaux d'objetset
// Consigne : Créez un tableau appelé `competences` qui contient trois objets. Chaque objet a deux propriétés :

// console.log(personne.competences);

console.log("Compétences de la personne :");
personne.competences.forEach(competence => {
    console.log(`- ${competence.nom} (Niveau : ${competence.niveau}/4)`);
});


// todo Exercice 9 :  Déstructuration d'objets
// Consigne : Utilisez la déstructuration pour extraire les propriétés `nom`, `prenom` et `email` de l'objet `personne` dans des variables séparées. Puis affichez ces variables dans la console.

// Déstructuration de l'objet personne
// const { nom, prenom, email } = personne;

// // Affichage des variables extraites
// console.log(`Nom : ${nom}`);
// console.log(`Prénom : ${prenom}`);
// console.log(`Email : ${email}`);


// todo Exercice 10 : Object.keys, Object.values et Object.entries
// Consigne :

// 1. Afficher toutes les clés de l'objet (propriétés de premier niveau uniquement)
console.log("Clés de l'objet personne :", Object.keys(personne));

// 2. Afficher toutes les valeurs de l'objet (premier niveau uniquement)
console.log("Valeurs de l'objet personne :", Object.values(personne));

// 3. Afficher toutes les paires clé-valeur de l'objet
console.log("Paires clé-valeur de l'objet personne :", Object.entries(personne));


//! 2ème partie de l'exercice :
 
// todo Exercice 1 : Déclaration d'un objet
const bibliotheque = {
  nom : "Bibliotheque municipal",
  adresse : "12 rue des Livres",
  nombreLivres : 5000,
  ville : "Lyon",
  }
  console.log(bibliotheque);
  
  // todo Exercice 2 : Accès aux propriétés d'un objet
  
  console.log(bibliotheque.nom, bibliotheque.nombreLivres);
  console.log(bibliotheque["nom"], bibliotheque["nombreLivres"]);
  
  // todo Exercice 3 : Modification des propriétés
  bibliotheque.nombreLivres = 5500;
  bibliotheque.ville = "Paris";
  console.log(bibliotheque.nom, bibliotheque.adresse, bibliotheque.nombreLivres, bibliotheque.ville);
  
  // todo Exercice 4 : Modification des propriétés
  bibliotheque.email = "biblio@ville.com";
  bibliotheque.telephone = "07 01 02 03 04";
  console.log(bibliotheque);
  
  // todo Exercice 5 :  Méthodes d'objet
  function afficherInfo() {
    return `La ${bibliotheque.nom} située au ${bibliotheque.adresse} à ${bibliotheque.ville} que possède ${bibliotheque.nombreLivres} livres.`;
  };
  console.log(afficherInfo());
  
  // todo Exercice 6 : Parcourir un objet
  for(let allBooks in bibliotheque){
    console.log(allBooks, bibliotheque[allBooks]);
  };
  
  // todo Exercice 7 : Objets imbriqués
  delete adresse
  bibliotheque.localisation = {
    rue : "12 rue des Livres",
    codePostale : 75000,
    ville : "Paris"
  
  }
  console.log(`L'adresse complète est ${bibliotheque.localisation.rue} ${bibliotheque.localisation.codePostale} ${bibliotheque.localisation.ville}`);
  
  // todo Exercice 8 : Tableaux d'objets
   const Categories = [
  {nom : "Roman", nombreLivres : 1500},
  {nom : "Science-fiction", nombreLivres : 500},
  {nom : "Jeunesse", nombreLivres : 1000}
   ];
  
  console.log("Les carégories de la bibliotheque :")
  Categories.forEach(category => {
  console.log(`-${category.nom} : ${category.nombreLivres}`)
  });
  
  // todo Exercice 9 : Déstructuration d'objets
  const { nom, ville, email} = bibliotheque;
  console.log(`Nom : ${nom}`);
  console.log(`vile : ${nom}`);
  console.log(`email : ${nom}`);
  
  // todo Exercice 10: Object.keys, Object.values et Object.entries
  
  console.log("Toutes les clés de l'objet", Object.keys(bibliotheque));
  console.log("Toutes les valeurs de l'objet", Object.values(bibliotheque));
  console.log("Toutes les paires clé-valeur de l'objet", Object.entries(bibliotheque));
  ///////////////////////////////////////////////////////
  
