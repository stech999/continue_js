// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных(картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости(по желанию).

const userData = JSON.parse(dataImg);
const contentEl = document.querySelector('.content');

userData.forEach(userData => {
    const titleEl = document.createElement('div');
    titleEl.textContent = `Заголовок: ${userData.name}`;
    const imgEl = document.createElement('img');
    imgEl.src = userData.img;
    imgEl.style.width = '500px';
    imgEl.style.height = '500px';
    const paragEl = document.createElement('p');
    paragEl.textContent = `Описание: ${userData.parag}`;

    contentEl.appendChild(titleEl);
    contentEl.appendChild(imgEl);
    contentEl.appendChild(paragEl);
});