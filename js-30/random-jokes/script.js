const audio = new Audio();
const btnPlay = document.querySelector('.btn');

function playSong() {
    audio.src = './assets/audio/Burp-A1-www.fesliyanstudios.com.mp3';
    let isPlay = false
    if (!isPlay) {
        audio.play()
    }
}

btnPlay.addEventListener('click', playSong);


//-----------------------------------------------------
// function getdata() {
//     let dataQuote = document.querySelector('.quote');
//     // fetch('http://loremricksum.com/api/')
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         console.log(data)
//     //         datacur.innerHTML = data.value;
//     //     })
//     //     .catch(err => console.error())

//     fetch('http://loremricksum.com/api/')
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             dataQuote.innerHTML = data.value;
//         });


// }
//-------------------------------------------------------

// const urlQuote = 'rick-and-morty-quotes.json';

// async function getQuote() {
//     const resQuote = await fetch(urlQuote);
//     const quote = await resQuote.json();
//     showQuote(quote);
// }
// getQuote();

// function showQuote(quote) {
//     document.getElementsByName('.quote').src = './rick-and-morty-quotes.json';

// }

// const quoteBtn = document.querySelector('.btn');
// quoteBtn.addEventListener('click', getQuote);

//-----------------------------------------------------