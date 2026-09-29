"use strict";

// DONNÉES ET CHARGEMENT FOURNIS : cette partie n'est pas évaluée.
// Source : https://fakestoreapi.noksha.dev/api/products
// Capture du 28/09/2026. Prix affichés en euros par convention d'exercice.
// Garder le mode décidé par l'enseignant, identique pour toute la classe.
const MODE_DONNEES = "capture"; // alternative enseignant : "reseau"
const PRODUITS_CAPTURE = [
  {
    "_id": 1,
    "title": "Long sleeve Jacket",
    "price": 150,
    "category": "women",
    "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg"
  },
  {
    "_id": 2,
    "title": "Jacket with wollen hat",
    "price": 65,
    "category": "women",
    "image": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg"
  },
  {
    "_id": 3,
    "title": "Compact fashion t-shirt",
    "price": 55.99,
    "category": "women",
    "image": "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg"
  },
  {
    "_id": 4,
    "title": "Blue jins",
    "price": 50,
    "category": "women",
    "image": "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg"
  },
  {
    "_id": 5,
    "title": "Skirts with full setup",
    "price": 695,
    "category": "women",
    "image": "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg"
  },
  {
    "_id": 6,
    "title": "Yellow Hoody",
    "price": 180,
    "category": "men",
    "image": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
  }
];

let produits = [];
let panier = [];

function demarrer() {
    produits = PRODUITS_CAPTURE;
    
    const conteneur = document.querySelector('.products'); 
    if (conteneur) {
        produits.forEach(p => {
            conteneur.innerHTML += `
                <div class="product-card" style="border: 1px solid ; padding: 15px; margin: 10px; text-align: center; background: white;">
                    <img src="${p.image}" alt="${p.title}" style="width:100px; height:100spx; object-fit:cover;">
                    <h3>${p.title}</h3>
                    <p>${p.price} €</p>
                    <button onclick>Choisir dans votre Panier</button>
                </div>
            `;
        });
    }
}

demarrer()

const toggleSideBar = () => {
  const panier = document.querySelector('.panier')
  const sideBar = document.querySelector('.sidebar')
  panier.addEventListener('click', () => {
    sideBar.classList.toggle('w-[600px]')
    if (panierBtn && sideBar) {
        panierBtn.addEventListener('click', () => {
            if (sideBar.style.width === "300px") {
                sideBar.style.width = "0px";
            } else {
                sideBar.style.width = "300px";
            }
        });
    }
  })
}

toggleSideBar();

console.log
const addToCard = (id) => {
    const produitChoisi = produits.find(p => p._id === id);//il cherche dans le tableau l'article demander
    if (produitChoisi) {
        panier.push(produitChoisi);//J'ai essayé de le mettre dans le panier mais je n'arrive pas
        displaySideBar();
    }
}


const displaySideBar = () => {

  
}

const deleteArticle = () => {
 
}







