// Задание 1(тайминг 10 минут)
//     < div id = "block" >
// <p>1</p>
// <p>2</p>
// </ >
//     1 Получите ссылку на первый абзац из дива с id,
//         равным block, выведите его в консоль
// 2 Получите ссылку на первый абзац с классом www.
// и вывести его в консоль
//     < p class="www" > text 1</ >
//         <p class="www">text 2</p>
// const blockEl = document.querySelector('#block');
// console.log(blockEl);
// const paragraphEl = document.querySelector('p.www');
// console.log(paragraphEl);
// const paragraphElClone = document.querySelectorAll('.www')[0];
// console.log(paragraphElClone);

// Задание 2(тайминг 15 минут)
// 1 Дан тег < a class="link" href = "#" > link text html</ >
//     a.Вам необходимо поменять текст внутри ссылки на “link
// text js”
// b.Заменить href, на значение
// https://developer.mozilla.org/ru/
// 2 Дан тег < img class="photo" src = "" alt = "" >
//     a.Вам необходимо с помощью js поменять значение src на
// любое изображение из интернета

// const link = document.querySelector(".link");
// link.textContent = "Link text js";
// link.href = "https://developer.mozilla.org/ru/";

// const img = document.querySelector(".photo");
// img.src = 'https://avatars.mds.yandex.net/i?id=447909d704697c96f2d7114c4eee8f4c205933ea-12481555-images-thumbs&n=13';

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// const divEl = document.querySelector('.content');
// const parEl = document.createElement('p');
// parEl.textContent = 'Новый текстовый элемент';
// divEl.appendChild(parEl);
// Создать элемент button, добавить в блок < div class="content" ></ >
//     При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку


// const divEl = document.querySelector('.content');
// const parEl = document.createElement('p');
// parEl.textContent = 'Новый текстовый элемент';
// divEl.appendChild(parEl);
// parEl.remove();


// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const newButtonEl = document.createElement('button');
// newButtonEl.textContent = 'Волшебная кнопка';
// divEl.appendChild(newButtonEl);
// let count = 0;
// newButtonEl.onclick = function () {
//     count++;
//     console.log(`Нажато ${count} раз`);
// }
// другой пример
const btn = document.createElement("button");
let isToggled = false
btn.textContent = 'Кнопка'
content.append(btn);
let count = 0
btn.addEventListener("click", (e) => {
    if (isToggled) {
        btn.textContent = 'Кнопка'
    } else {
        btn.textContent = 'Отправлен'
    }
    isToggled = !isToggled
})


// Дан тег <div class="content"></div >
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const newButtonEl2 = document.createElement('button');
newButtonEl2.textContent = 'Отправить';
divEl.appendChild(newButtonEl2);

newButtonEl2.onclick = function () {
    newButtonEl2.textContent = 'Текст отправлен';
    newButtonEl2.style.width = "230px";
}
console.dir(newButtonEl2);