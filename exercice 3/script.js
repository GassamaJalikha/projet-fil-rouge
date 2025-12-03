// - Créer une variable pour le nom de la boutique (shopname)
const shopname = "Zara";
// - Créer une variable pour la ville (city)
const city = "Lyon";
// - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
let isOpen = true;
// - Créer une variable pour le nombre de produits (productCount)
let productCount = 20;
// - Créer une variable pour le slogan(slogan)
let slogan = "Venez vous habiller ";
// - Afficher un message de bienvenue dans la console
console.log("Bienvenue");
//   (indice : concaténer texte + variables)
// - Afficher le slogan dans la console
console.log(slogan);
// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
console.log("isOpen");
//   - ou un message “fermée”

// Nouveauté exo 2

// - Partir du slogan déjà créé à l’exercice 1
// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
console.log(slogan + city);

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
console.log(`${slogan} ${city}`);
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})

// - Calculer la longueur du slogan
console.log(slogan.length);

// - Créer une version en majuscules du slogan
console.log(slogan.toUpperCase());

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
console.log(slogan.replace("venez", "viens"));

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console
let welcomeMessage = slogan + "à " + city;
let welcomeMessage2 = `${slogan} à ${city}`;
let tailleslogan = welcomeMessage.length;
console.log(tailleslogan);
let uppermessage = welcomeMessage.toUpperCase();
console.log(uppermessage);
let welcomeMessagereplace = welcomeMessage.replace("Lyon", "Grenoble");
console.log(welcomeMessagereplace);

// Nouveauté exo 3

// - Créer une variable contenant un prix HT d’exemple
let horstaxe = 25;

// - Créer une variable contenant le taux de TVA
//   (par exemple 0.2 pour 20%)
const tauxtva = 0.5;
// - Calculer le prix TTC à partir du prix HT et de la TVA
//   (indice : utiliser une addition et une multiplication)
let horstaxettc = horstaxe + (horstaxe*tauxtva);

// - Afficher le prix HT et le prix TTC dans la console
console.log(horstaxe);
console.log(horstaxettc);

// - Simuler une nouvelle vente en augmentant ce compteur
//   (indice : utiliser l’opérateur pour ajouter 1)
let ventes = 0;
ventes++;

// - Afficher la nouvelle valeur du compteur dans la console
console.log(ventes);


function bjr(prenom) {
    console.log("bjr " + prenom);
}
bjr("jalikha");

