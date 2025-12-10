/*************************************************
 * EXERCICE 8 - Panier & conditions (sans clic)
 * Notions : variables globales, if / else if / else,
 *           DOM, réutilisation des fonctions
 *************************************************/

/* --- Correction Exercice 1 - Variables & infos de base --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
    console.log("La boutique est ouverte.");
} else {
    console.log("La boutique est fermée.");
}

// Tagline dans le header (si présente)
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
    taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

// Année dans le footer (si présente)
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* --- Correction Exercice 2 - Chaînes de caractères & messages --- */

let welcomeMessage =
    "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
    cartMessageElementEx2.textContent =
        sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* --- Correction Exercice 3 - Nombres & calculs --- */
const TVA = 0.2;

/* --- Correction Exercice 4 - Fonctions de prix --- */
function calculatePriceTTC(priceHT) {
    return priceHT + priceHT * TVA;
}

function formatPrice(price) {
    return price.toFixed(2) + " €";
}






/* --- Correction Exercice 6 - Tableaux simples & boucle for --- */

const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
const productPricesHT = [19.99, 9.99, 2.5];

console.log("Nombre de produits (tableaux simples) :", productNames.length);

function displayProductsInConsole() {
    for (let i = 0; i < productNames.length; i++) {
        const name = productNames[i];
        const priceHT = productPricesHT[i];
        const priceTTC = calculatePriceTTC(priceHT);
        const formattedPrice = formatPrice(priceTTC);

        console.log(`${i + 1} - ${name} — ${formattedPrice} TTC`);
    }
}

displayProductsInConsole();

/* --- Correction Exercice 7 - Tableau d'objets & affichage DOM --- */

const products = [
    {
        id: 1,
        name: "T-shirt JS",
        priceHT: 19.99,
        description: "T-shirt confortable pour développeurs JavaScript.",
        image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        id: 2,
        name: "Mug Debug",
        priceHT: 9.99,
        description: "Mug pour déboguer avec du café ☕.",
        image: "https://images.unsplash.com/photo-1639755507638-e34150b56db2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Sticker Bug Free",
        priceHT: 2.5,
        description: "Un sticker pour célébrer les bugs corrigés.",
        image: "https://images.unsplash.com/photo-1662389943678-df7f58b730e8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const productListSection = document.getElementById("product-list");

// function createProductCard(product) {
//     const article = document.createElement("article");
//     article.classList.add("product-card");

//     const img = document.createElement("img");
//     img.src = product.image;
//     img.alt = product.name;
//     img.classList.add("product-image");

//     const title = document.createElement("h3");
//     title.textContent = product.name;
//     title.classList.add("product-title");

//     const priceElt = document.createElement("p");
//     const priceTTC = calculatePriceTTC(product.priceHT);
//     priceElt.textContent = formatPrice(priceTTC);
//     priceElt.classList.add("product-price");

//     const desc = document.createElement("p");
//     desc.textContent = product.description;
//     desc.classList.add("product-description");

//     article.appendChild(img);
//     article.appendChild(title);
//     article.appendChild(priceElt);
//     article.appendChild(desc);

//     return article;
// }

function displayProductsInPage() {
    if (!productListSection) return;

    productListSection.innerHTML = "";

    for (const product of products) {
        const card = createProductCard(product);
        productListSection.appendChild(card);
    }
}

displayProductsInPage();

/*************************************************
 * Nouveautés EXERCICE 8 - Panier & conditions
 * Objectif : afficher un message différent selon
 *            le total du panier (sans clic)
 *************************************************/

// 1) État du panier
let cartItemCount = 0;
let cartTotal = 0;

// 2) Éléments du DOM liés au panier
const cartCountHeader = document.getElementById("cart-count");
const cartTotalHeader = document.getElementById("cart-total");
const cartCountAside = document.getElementById("cart-count-aside");
const cartTotalAside = document.getElementById("cart-total-aside");
const cartMessage = document.getElementById("cart-message");

// 3) Fonction qui renvoie un message selon le total
function getCartMessage(total) {
    if (total === 0) {
        return "Votre panier est vide.";
    } else if (total < 50) {
        return "Ajoutez encore des produits pour profiter de la livraison offerte à partir de 50 €.";
    } else {
        return "Livraison offerte 🎉 Merci pour votre commande !";
    }
}

// 4) Fonction qui met à jour l’affichage du panier (header + aside + message)
function updateCartDisplay() {
    // Header
    if (cartCountHeader) {
        cartCountHeader.textContent = cartItemCount.toString();
    }
    if (cartTotalHeader) {
        cartTotalHeader.textContent = formatPrice(cartTotal);
    }

    // Aside
    if (cartCountAside) {
        cartCountAside.textContent = cartItemCount.toString();
        console.log("cartCountAside: " + cartCountAside);
        console.log("cartItemCount: " + cartItemCount);

    }
    if (cartTotalAside) {
        console.log("cartTotal: " + cartTotal);
        console.log("cartTotalAside: " + cartTotalAside);

        cartTotalAside.textContent = formatPrice(cartTotal);
    }

    // Message
    if (cartMessage) {
        cartMessage.textContent = getCartMessage(cartTotal);
    }
}

/* 5) Tests simples à faire à la main
   Tu peux demander aux élèves de modifier ces valeurs
   pour tester les 3 cas : 0 / < 50 / >= 50
*/



console.log("Exercice 8 simplifié chargé ✅");

// - Remettre `cartItemCount = 0`
cartItemCount = 0;
// - Remettre `cartTotal = 0`
cartTotal = 0;
// - Appeler `updateCartDisplay()`
updateCartDisplay()

// - Définir `addToCart(product)` :
function addToCart(product) {
    //   - calculer `priceTTC` à partir de `product.priceHT`
    const priceTTC = calculatePriceTTC(product.priceHT);
    //   - ajouter `priceTTC` à `cartTotal`
    cartTotal += priceTTC;
    //   - augmenter `cartItemCount`
    cartItemCount++;
    //   - appeler `updateCartDisplay()`
    updateCartDisplay();
}

// - Mettre à jour `createProductCard(product)` :
function createProductCard(product) {
    //   - créer un conteneur (article)
    const article = document.createElement("article");

    // article.classList("product-card"); !!

    //   - créer et remplir les éléments (image, titre, prix TTC, description)
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.classList.add("product-image");

    const title = document.createElement("h3");
    title.textContent = product.name;
    title.classList.add("product-title");

    const priceElt = document.createElement("p");
    const priceTTC = calculatePriceTTC(product.priceHT);
    priceElt.textContent = formatPrice(priceTTC);
    priceElt.classList.add("product-price");

    const desc = document.createElement("p");
    desc.textContent = product.description;
    desc.classList.add("product-description");
    //   - créer un bouton
    const button = document.createElement("button");
    //     - texte : “Ajouter au panier”
    button.textContent = "Ajouter au panier";
    //     - classe CSS : `btn-add`
    button.classList.add("btn-add");
    //     - au clic → appeler `addToCart(product)`
    //   - retourner le conteneur
    addEventListener("click", function () {
        addToCart(product)
    });
    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(priceElt);
    article.appendChild(desc);
    article.appendChild(button);
    return article
}

// - Définir `displayProductsInPage()` :
function displayProductsInPage() {


    const productList = document.getElementById("product-list");

    if (productList) {
        productList.innerHTML = "";
        products.forEach(element => {
            const card = createProductCard(element);
            productList.appendChild(card);
        });
    }

}
// - À la fin du script :
displayProductsInPage()
//   - appeler `updateCartDisplay()`
updateCartDisplay()







