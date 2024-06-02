// 1 задание
console.log('1. Ко всем элементам, имеющим класс "dropdown-item"\n', 'добавить еще один класс "super-dropdown", необходимо использовать,\n', 'методы forEach и querySelectorAll и свойство classList у элементов.');

document.querySelectorAll('.dropdown-item').forEach(function (el) {
    el.classList.add('super-dropdown');
});

// 2 Задание
console.log('2. У элемента с классом btn необходимо убрать класс\n', '"btn-secondary", если он присутствует у этого элемента, либо добавить,\n','если такого класса у элемента не было.');
const btn = document.querySelector('.btn').classList.toggle('btn-secondary');
const btn_new = document.querySelector('.btn');
console.log(btn_new);
console.log(btn); //false если нету

//3 задание 
console.log(' 3. Необходимо удалить класс "dropdown-menu" у элемента,',
'у которого присутствует класс "menu".');

const dropdown_menu = document.querySelector('.menu').classList.remove('dropdown-menu');
const dropdown_menu_new = document.querySelector('.menu');
console.log(dropdown_menu_new);


console.log('4 Задача');
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
//     `<a href="#">link</a>`

document.querySelector('.dropdown').insertAdjacentHTML('afterend', '<a href="#">link</a>');

console.log('5 Задача');
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

document.getElementById('dropdownMenuButton').id = 'superDropdown';

console.log('6 Задача');
// 6. Добавьте атрибут data - dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

let data_dd = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
if (data_dd) {
    data_dd.dataset.dd = '3';
}

console.log('7 Задача');
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
let el_type = document.querySelector('.dropdown-toggle');
if (el_type) {
    el_type.removeAttribute('type');
}
