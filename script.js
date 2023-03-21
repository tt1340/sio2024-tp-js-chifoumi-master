let statutJeu = document.querySelector("#statut-jeu");
let boutons = document.querySelectorAll(".container-boutons button");
let boutonsTexte = ["PIERRE", "FEUILLE", "CISEAUX"];
let scoreJoueur = 0;
let scoreOrdi = 0;
let scores = document.querySelectorAll("#scores")

// La suite du script constitue en la définition des fonctions utilisées dans le jeu

/**
 * Calcule le résultat de la partie, ie. le message de victoire, défaite ou égalité
 * @param  {Number}   monCoup  coup du joueur
 * @param  {Number}   coupOrdi  coup de l'ordinateur
 * @return {String}   result le message correspondant au résultat
 */
function calculerResultat(monCoup, coupOrdi) {
    if (coupOrdi == monCoup) {
        return "Copieur !"
    } else if (coupOrdi == monCoup - 1 || (monCoup == 1 && coupOrdi == 3)) {
        scoreJoueur++
        scores[0].textContent = scoreJoueur
        return "OK, gagné..."
    } else {
        scoreOrdi++
        scores[1].textContent = scoreOrdi
        return "Looser !"
    }
}

/**
 * @return {Number}   nombre entier aléatoire entre 0 et 2
 */
function coupAleatoire() {
    return Math.floor(Math.random() * 3);
}

/**
 * Mise en place d'une nouvelle partie
 */
function commencerPartie() {
    statutJeu.textContent = "Choisissez !"
    boutons.forEach((bouton, index) => {
        bouton.textContent = boutonsTexte[index]
        bouton.addEventListener("click", finirPartie)
    })
}

/**
 * Affiche le résultat final de la partie
 * @param {Event} event événement contenant les informations de l'entrée utilisateur
 */

function finirPartie(event) {
    // On récupère le coup joué par le joueur
    let monCoup = boutonsTexte.indexOf(event.target.textContent);

    // On génère un coup aléatoire pour l'ordinateur
    let coupOrdi = coupAleatoire();

    // On calcule le résultat de la partie et on l'affiche dans "statutJeu"
    statutJeu.textContent = calculerResultat(monCoup, coupOrdi)

    // On affiche les coups joués par les deux joueurs dans les éléments "affichageCoupsJoues" sous la forme "monCoup" "vs." "coupOrdi"
    let affichageCoupsJoues = document.querySelectorAll(".container-coups-joues h2")
    let texteCoupsJoues = [boutonsTexte[monCoup], "vs.", boutonsTexte[coupOrdi]]

    affichageCoupsJoues.forEach((elt, index) => elt.textContent = texteCoupsJoues[index])

    // On cache les 1er et 3ème boutons de jeu
    // On modifie le texte du bouton de nouvelle partie (2ème bouton) pour afficher "Rejouer"
    boutons.forEach((elt, index) => {
        if (index === 0 || index === 2) {
            elt.style.display = "none";
        } else {
            elt.textContent = "Rejouer "
        }
    })

    // On supprime l'event listener existant sur le bouton "Rejouer"
    boutons[1].removeEventListener("click", finirPartie);

    // On ajoute un event listener sur le bouton "Rejouer" qui renvoie vers la fonction "commencerPartie"
    boutons[1].addEventListener("click", e => {
        commencerPartie()
        boutons[0].style.display = "inline-block";
        boutons[2].style.display = "inline-block";
    })
}

commencerPartie()