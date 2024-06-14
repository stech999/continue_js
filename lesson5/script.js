// 1. Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

// Задание 2(тайминг 15 минут)
// 1. Создать файл data.js
// 2. Создать переменную dataInfo
// 3. Добавить несколько данных в dataInfo

// Задание 3(тайминг 30 минут)
// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок < div class="content" ></ >
//     4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

// Задание 4(тайминг 20 минут)
// 1. Создать все необходимые заголовки, параграфы изображения(из
// данных json)
// 2. Добавить все содержимое в блок контент
// 3. Добавить стили при необходимости

// const parseData = JSON.parse(data);
// console.log(parseData);
// const divEl = document.querySelector('.content');
// parseData.forEach(item => {
//     divEl.insertAdjacentHTML('beforeend', `
//         <h2>${item.name}</h2>
//         <p>${item.username}</p>
//         <span>${item.email}</span>
//         <span>${item.address.city}</span>
//     `)
// });

// const myPromise = new Promise((resolve, reject) => {

// })
// console.log(myPromise);
// myPromise.then((value) => {

// }).catch((error) => {

// })
// const URL1 = `https://dog.ceo/api/breeds/image/random`;
// const URL2 = `https://jsonplaceholder.typicode.com/`;

// fetch(URL2)
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json);
//     })
//     .catch((error) => {
//         // console.log(error.message);
//         console.log('Что-то пошло не так');
//     });

// const getData = async (URL1) => {
//     try {
//         const res = await fetch(URL1);
//         const dataFromServer = await res.json();
//         return dataFromServer;
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// // console.log(fetchData);

// const btnEl = document.querySelector('button');
// btnEl.addEventListener('click', async (e) => {
//     const fetchData = await getData(URL1);
//     const imgEl = document.querySelector('img');
//     imgEl.src = fetchData.message;
// });