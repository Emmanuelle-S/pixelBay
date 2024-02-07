let conteneur = document.getElementById("displayContainer"); // va récuperer l'id de la div "container"
let numeroDuJeu = prompt("Entrez le numéro du jeu (1, 2, 3 ou 4):");

switch (numeroDuJeu) { //va evaluer le code entré dans le prompt et selon va executer le cas correspondant
    case "1" : conteneur.innerHTML = "Space Adventure"; // conteneur = variable ci dessus qui cible la div "container", et innerHtml = instruction qui permet de modifier le contenu de la balise "div"
    break;
    case "2" : conteneur.innerHTML = "Castle Quest";
    break;
    case "3" : conteneur.innerHTML = "Mystery Island";
    break;
    case "4" : conteneur.innerHTML = "Robot Wars";
}