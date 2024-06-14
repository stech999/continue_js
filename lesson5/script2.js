const myPromise = new Promise((resolve, reject) => {

})
console.log(myPromise);
myPromise.then((value) => {

}).catch((error) => {

})
const URL1 = `https://dogceo/api/breeds/image/random`;
const URL2 = `https://jsonplaceholder.typicode.com/`;

fetch(URL2)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        // console.log(error.message);
        console.log('Что-то пошло не так');
    })

// const URL = "https://dog.ceo/api/breeds/image/random"
// function random() {
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => {
//             const img = document.querySelector('.dog-image')
//             img.src = data.message
//         }).catch((error) => {
//             console.error(error);
//         })
// }
// const btn = document.querySelector('.refresh-button');
// btn.addEventListener('click', random)
// random()