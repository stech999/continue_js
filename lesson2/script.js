// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const buttonEl = document.createElement('button');
// buttonEl.textContent = "Кнопка";
// document.body.appendChild(buttonEl);
// window.onload = () => {
//     console.log("Страница загрузилась");
// }
// buttonEl.onclick = function () {
//     console.log("Событие onclick");
// }
// buttonEl.addEventListener('click', (event) => {
//     console.log("Событие addEventListener");
// });

//--------------
// Создать в html три кнопки button с нумерацией(1, 2, 3 соответственно)
// Добавить клик на кнопку, чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
// const bodyEl = document.querySelector('body');
// for (let i = 1; i < 4; i++) {
//     bodyEl.insertAdjacentHTML('beforeend', `<button>Кнопка ${i}</button>`);
// }
// const buttonElems = document.querySelectorAll('button');
// buttonElems.forEach(element => {
//     // element.onclick = () => {
//     //     console.log(element);
//     // }
//     element.addEventListener('click', (event) => {
//         console.log(event.target);
//     });
// });
// const buttonEl4 = document.createElement('button');
// buttonEl4.textContent = "Кнопка 4";
// bodyEl.appendChild(buttonEl4);
// let counter = 0;
// buttonEl4.addEventListener('click', () => {
//     counter++;
//     console.log(`Раз нажато на кнопку: ${counter}`);
// });
// const buttonEl5 = document.createElement('button');
// buttonEl5.textContent = "Кнопка 5";
// bodyEl.appendChild(buttonEl5);
// buttonEl5.addEventListener('click', function () {
//     buttonEl5.textContent = 'Вы нажали на эту кнопку';
// });

//--------------------
// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const bodyEl = document.querySelector('body');
// const buttonH1Elem = document.createElement('button');
// buttonH1Elem.textContent = "Добавь h1";
// bodyEl.insertAdjacentElement('beforeend', buttonH1Elem);

// buttonH1Elem.addEventListener('click', function () {
//     // bodyEl.appendChild(h1Elem);
//     const h1Elem = document.createElement('h1');
//     h1Elem.textContent = 'Новый заголовок';
//     buttonH1Elem.after(h1Elem);
// });
// const buttonRemoveH1 = document.createElement('button');
// buttonRemoveH1.textContent = "Удалить h1";
// bodyEl.appendChild(buttonRemoveH1);
// buttonRemoveH1.addEventListener('click', () => {
//     document.querySelector('h1').remove();
// });
// const buttonPointAtMe = document.createElement('button');
// buttonPointAtMe.textContent = "Наведи на меня";
// bodyEl.appendChild(buttonPointAtMe);
// buttonPointAtMe.addEventListener('mouseover', () => {
//     console.log("Вы навели на данную кнопку");
// });
// buttonPointAtMe.addEventListener('mouseleave', function () {
//     console.log("Вы убрали курсор с кнопки");
// });

//------------------
// Создать в html список состоящий из 3 - х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”
// const bodyEl = document.querySelector('body');
// const ulElem = document.createElement('ul');
// const liElem1 = document.createElement('li');
// const liElem2 = document.createElement('li');
// const liElem3 = document.createElement('li');

// liElem1.textContent = "Элемент1";
// liElem2.textContent = "Элемент2";
// liElem3.textContent = "Элемент3";
// bodyEl.appendChild(ulElem);
// ulElem.append(liElem1, liElem2, liElem3);
// const buttonAddElem = document.createElement('button');
// buttonAddElem.textContent = "Добавить элемент";
// bodyEl.after(buttonAddElem);
// buttonAddElem.addEventListener('click', () => {
//     ulElem.insertAdjacentHTML('beforeend', '<li>Новый элемент списка</li>');
// });
// const buttonRemoveFirstElem = document.createElement('button');
// buttonRemoveFirstElem.textContent = "Удалить первый элемент";
// buttonAddElem.after(buttonRemoveFirstElem);
// buttonRemoveFirstElem.addEventListener('click', function () {
//     ulElem.firstChild.remove();
// });
// const buttonAddClass = document.createElement('button');
// buttonAddClass.textContent = "Добавь класс";
// buttonRemoveFirstElem.after(buttonAddClass);
// buttonAddClass.addEventListener('click', () => {
//     buttonAddClass.classList.add('click');
// });

// const ul = document.querySelector("ul");
// ul.addEventListener('click', (e) => {
//     console.log(e.target);
// })

// Вот при клики на любой элемент из списка



// пример делегирования

// const ul = document.querySelector("ul");
// ul.addEventListener('click', (e) => {
//     console.log(e.currentTarget);
// })