// Выполнить все задачи в теге script.Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

// ```
// <a href="#" class="card-link">Card link</a>
// <a href="#" class="card-link">Another link</a>

// <div class="card" style="width: 18rem;">
// <div class="card-body">
// <h5 class="card-title" data-number="100">Card title</h5>
// <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
// <p class="card-text" data-number="50">
// Some quick example text to build on the card title and make up the bulk of the card's
// content.
// </p>
// <a href="#" id="super_link" class="card-link">Card link</a>
// <a href="#" class="card-link" data-number="50">Another link</a>
// </div>
// </div>

// <script>
// "use strict";


// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const super_link = document.getElementById('super_link');
console.log(super_link);
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const link_card = document.querySelectorAll('.card-link');
link_card.forEach(el => {
    console.log(el.textContent = 'ссылка');
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const card_body = document.querySelectorAll('.card-link');
card_body.forEach(cb => {
    const card_link = document.querySelectorAll('.card-link');
    console.log(card_link);
});

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data - number со значением 50 и вывести его в консоль.

const data_number = document.querySelector('[data-number="50"]');
data_number ? console.log(data_number) : console.log("Такого парамемтра нету");

// if (data_number) {
//     console.log(data_number);
// } else {
//     console.log("Такого парамемтра нету");
// }


// 5. Выведите содержимое тега title в консоль.
const title = document.querySelector('title').innerHTML;
// const title = document.querySelector('title');
console.log(title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const card_title = document.querySelector('.card-title');
if (card_title) {
    const parentEl = card_title.parentNode;
    console.log(parentEl);

} else {
    console.log('Нету такого класа');
}
// 7. Создайте тег, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const teg = document.createElement('span');
teg.textContent = 'Привет';

const card = document.body.firstElementChild;
console.log(document.body.insertBefore(teg, card).innerHTML);


// card ? console.log(card.prepend(teg)) : console.log('Не создался объект');

// 8. Удалите тег h6 на странице.
const del_h6 = document.querySelector('h6');
del_h6.remove();