let statutJeu = document.querySelector("#statut-jeu");
let coups = ["PIERRE", "FEUILLE", "CISEAUX"]
let boutons = document.querySelectorAll("button");




// Appel de la fonction de mise en place d'une nouvelle partie
commencerPartie();
statutJeu.textContent = "choisissez !";
let affichageCoupsJoues = document.querySelectorAll(
    ".container-coups-joues h2" // récupère tous les h2 qui sont enfants de .container-coups-joues
);
for (let i = 0; i < 3; i++) {
    boutons[i].textContent = coups[i];
}
boutons.forEach((btn, index) => {
    btn.textContent = coups[index];
});
// La suite du script constitue en la définition des fonctions utilisées dans le jeu

/**
 * Calcule le résultat de la partie, ie. le message de victoire, défaite ou égalité
 * @param  {Number}   monCoup  coup du joueur
 * @param  {Number}   coupOrdi  coup de l'ordinateur
 * @return {String}   result le message correspondant au résultat
 */
function calculerResultat(monCoup, coupOrdi) { }

/**
 * @return {Number}   nombre entier aléatoire entre 0 et 2
 */
function coupAleatoire() {
    return Math.floor(Math.random() * 3);
}

/**
 * Mise en place d'une nouvelle partie
 */
function commencerPartie() { }

/**
 * Affiche le résultat final de la partie
 * @param {Event} event événement contenant les informations de l'entrée utilisateur
 */

function finirPartie(event) { }