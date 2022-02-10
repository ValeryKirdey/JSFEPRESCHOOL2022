const audio = new Audio();
const btnPlay = document.querySelector('.btn');

function burp() {
    audio.src = './assets/audio/Burp-A1-www.fesliyanstudios.com.mp3';
    let isPlay = false
    if (!isPlay) {
        audio.play()
    }
}

btnPlay.addEventListener('click', burp);


//-----------------------------------------------------


// function getdata() {
//     let dataQuote = document.querySelector('.quote');
// // fetch('http://loremricksum.com/api/')
// //     .then(response => response.json())
// //     .then(data => {
// //         console.log(data)
// //         datacur.innerHTML = data.value;
// //     })
// //     .catch(err => console.error())

//     fetch('http://loremricksum.com/api/')
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             dataQuote.innerHTML = data.value;
//         });


// }