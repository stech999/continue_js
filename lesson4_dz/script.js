// 1. При изменении значения в input с id = "from", значение содержащееся в нем должно моментально отображаться в span.То есть при печати в input'е тег span также должен меняться.

const fromEl = document.getElementById('from');
const spanEl = document.querySelector('span');
fromEl.addEventListener('input', () => {
    spanEl.textContent = fromEl.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
//     - поставить данному элементу стиль visibility в значение 'visible'.

// ---------- решение без добавления класса в стили ----------
// const messageBtnEl = document.querySelector('.messageBtn');
// const messageEl = document.querySelector('.message');
// messageBtnEl.addEventListener('click', () => {
//     messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
// })

// ---------- решение с добавлением класса в стили ----------
const messageBtnEl = document.querySelector('.messageBtn');
const messageEl = document.querySelector('.message');
messageBtnEl.addEventListener('click', () => {
    messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageEl.style.visibility = 'visible';
})

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.Если какое - либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля(необходимо поставить класс error незаполненным полям).Как только пользователь начинает заполнять какое - либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить(поставить класс error данному полю).
// - Если поле было чем - либо заполнено, подсветку(класс error) необходимо убрать.

// ---------- решение без добавления класса в стили ----------
// const formControlEl = document.querySelectorAll('.form-control');
// const formBtnEl = document.getElementById('formBtn');
// formBtnEl.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     formControlEl.forEach(el => {
//         if (el.value === '') {
//             el.style.border = '2px solid red';
//         } else {
//             el.style.border = '';
//         }
//     })
// });

// ---------- решение с добавлением класса в стили ----------
const formControlEl = document.querySelectorAll('.form-control');
const formBtnEl = document.getElementById('formBtn');
formBtnEl.addEventListener('click', (ev) => {
    ev.preventDefault();
    formControlEl.forEach(el => {
        if (el.value === '') {
            el.classList.add('error');
        } else {
            el.classList.remove('error');
        }
    })
});