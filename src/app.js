import "bootstrap";
import "./style.css";

// Definición de Arrays
const cardNumbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const cardSuits = [
  "src/img/trebol.jpg",
  "src/img/diamante.jpg",
  "src/img/corazon.jpg",
  "src/img/picas.jpg"
];

// Encontrar elementos en el DOM
const naipe = document.getElementById("naipe");
const number = document.getElementById("textoNumero");
const suitUp = document.getElementById("suitUp");
const suitDown = document.getElementById("suitDown");

// Función para ajustar el tamaño de fuente
const adjustTextSize = () => {
  const naipeWidth = naipe.offsetWidth;
  const naipeHeight = naipe.offsetHeight;

  const fontSize = Math.min(naipeWidth, naipeHeight) / 2;

  number.style.fontSize = `${fontSize}px`;
};

// Generar una carta aleatoria
const obtainRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

function generateRandomCard() {
  let cardNumber = obtainRandomElement(cardNumbers);
  let cardSuit = obtainRandomElement(cardSuits);

  number.innerHTML = cardNumber;
  suitUp.src = cardSuit;
  suitDown.src = cardSuit;

  if (
    cardSuit === "src/img/diamante.jpg" ||
    cardSuit === "src/img/corazon.jpg"
  ) {
    number.style.color = "red";
  } else {
    number.style.color = "black";
  }
}

window.onload = () => {
  generateRandomCard();
};

document.getElementById("button").addEventListener("click", generateRandomCard);

// Fijamos el intervalo en 10 segundos:

const intervalID = setInterval(generateRandomCard, 10000);
