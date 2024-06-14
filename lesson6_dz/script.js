// Задание 1
// 1. Поиск в интернете(бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

const URL = "https://dog.ceo/api/breeds/image/random"
function random() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector('.dog-image')
            img.src = data.message
        }).catch((error) => {
            console.error(error);
        })
}
const btn = document.querySelector('.refresh-button');
btn.addEventListener('click', random)
random()

