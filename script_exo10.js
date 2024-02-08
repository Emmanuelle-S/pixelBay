let jeux = ["Space Adventure", "Castle Quest", "Mystery Island", "Robot Wars", "Jungle Journey", "Racing Rush", "Pirate's Treasure", "Alien Invasion", "Super Sports", "Haunted Mansion", "Galactic Odyssey", "Winter Wonderland"];
let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]; // creation des deux tableaux
let liste = document.getElementById("listeJeux"); // on cible l'ol "listeJeux" par son id



for (let index = 0; index < mois.length; index++) { // démarre la boucle à l'index 0, va tourner jusqu'à la fin du tableau (.length), incrémente de 1 à chaque passage

    let liListe = document.createElement("li") //permet de créer l'élément "li" dans le DOM
    liListe.textContent = `${mois[index]} : ${jeux[index]}` //indique comment remplir dynamiquement la liste avec chaque index des 2 tableaux
    // textContent : renvoie la concaténation des valeurs de propriété textContent de chaque nœud enfant

    document.querySelector("ol").appendChild(liListe) // permet de séléctionner l'ol et de lui attribuer son enfant "li", et de l'afficher
}


