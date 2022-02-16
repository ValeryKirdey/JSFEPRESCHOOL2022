const button = document.querySelector(".btn");
const text = document.querySelector(".quote");
import { quotes } from "./quotes.js";
const ru = document.querySelector(".ru");
const en = document.querySelector(".en");
const url = 'https://api.icndb.com/jokes/random';

// async function getQuote() {
//     try {
//         const response = await fetch(url)
//         if (!response.ok) {
//             throw Error(response.statusText)
//         }
//         const json = await response.json();
//         displayQuote(json.message);
//     } catch (err) {
//         console.log(err)
//         alert('Failed to fetch new quote');
//     }
// }

// function displayQuote(quote) {
//     const quoteText = document.querySelector('.quote');
//     quoteText.textContent = quote;
// }

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        text.innerHTML = data.value.joke;
    } catch (error) {
        console.log(error);
    }
}
en.classList.add("active");

const updateRusText = () => {
    const number = Math.floor(Math.random() * 40);
    text.innerHTML = quotes[number].text;
};

ru.addEventListener("click", () => {
    updateRusText();
    new Audio("./assets/audio/Burp-A1-www.fesliyanstudios.com.mp3").play();

    en.classList.remove("active");
    ru.classList.add("active");
});

en.addEventListener("click", () => {
    fetchHandler();;
    ru.classList.remove("active");
    en.classList.add("active");
    new Audio("./assets/audio/Burp-A1-www.fesliyanstudios.com.mp3").play();
});

button.addEventListener("click", () => {
    if (ru.classList[1]) {
        updateRusText();
    } else {
        fetchHandler();;
    }

    new Audio("./assets/audio/Burp-A1-www.fesliyanstudios.com.mp3").play();
});

fetchHandler();