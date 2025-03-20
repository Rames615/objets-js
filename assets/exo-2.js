const card = document.querySelector(".card");
card.innerHTML = 
`<h2>${personne.prenom} ${personne.nom}</h2>
<p>Age : ${personne.age}</p>
<p> Adresse : ${personne.adresse.rue}, ${personne.adresse.ville}</p>
<p> ${personne.adresse.codePostal}</p>
<p> Email :${personne.email}</p>
<h3>compètences</h3>
 <ul>
    ${personne.competences
      .map(
        (competence) => `<li>${competence.nom}: niveau ${competence.niveau}/4</li>`
      )
      .join("")}
  </ul>
`;