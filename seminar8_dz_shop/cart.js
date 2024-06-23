const db = "./localDB.json";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

// Функция для обновления корзины
function updateCart(data) {
    const cartItem = document.querySelector('.header__prev'); // место выгрузки
    cartItem.innerHTML = ''; // Очищаем корзину
    let summaPrice = 0;

    data.forEach(item => {
        const ls = localStorage.getItem(item.id);
        if (item.id === ls) {
            summaPrice += item.price;
            cartItem.insertAdjacentHTML("beforeend", `
                <div class="header__prev__item" data-item-id="${item.id}"> 
                    <a href="#" class="cartItem">
                        <div>
                            <img class="img__item" src="${item.img}" alt="">
                        </div>
                        <div class="item__text">
                            <p class="prev__title">${item.title}</p>
                            <p><img src="${item.rating}" alt=""></p>
                            <p class="prev__item__price">
                                1
                                <span style="font-size: 10px;">
                                    x
                                </span> $${item.price}
                            </p>
                        </div>
                    </a>
                    <div class="prev__item__del" data-item-id="${item.id}">
                        <img src="${item.delItem}" alt="">
                    </div>
                </div>
            `);
        }
    });
    // итог в корзине и переход на другую страницу
    cartItem.insertAdjacentHTML('beforeend', `
        <div class="prev__total">
            <p>TOTAL</p>
            <p>$${summaPrice}</p>
        </div>
        <div class="prev__link">
            <a href="./checkout.html">
                <div class="prev__checkout">Checkout</div>
            </a>
            <a href="./shopping.html">
                <div class="prev__go__cart">Go to cart</div>
            </a>
        </div>
    `)

    // Обновляем общую сумму
    const totalSum = document.querySelector('.prev__total p:last-of-type');
    if (totalSum) {
        totalSum.textContent = `$${summaPrice}`;
    }

    // Обработчик событий для удаления товаров из корзины
    cartItem.addEventListener("click", (ev) => {
        if (ev.target.closest(".prev__item__del")) {
            const item = ev.target.closest(".header__prev__item");
            if (item) {
                const itemId = item.dataset.itemId; // Получаем ID товара
                localStorage.removeItem(itemId); // Удаляем из localStorage
                updateCart(data); // Обновляем корзину
                updateShopping(data); // Обновляем страницу "Shopping"
            }
        }
    });
}

// Функция для обновления страницы "Shopping"
function updateShopping(data) {
    const shoppingItem = document.querySelector('.shopping__products'); // место выгрузки
    shoppingItem.innerHTML = ''; // Очищаем корзину
    let summaPrice = 0;
    data.forEach(item => {
        const ls = localStorage.getItem(item.id);
        if (item.id === ls) {
            summaPrice += item.price;
            shoppingItem.insertAdjacentHTML("beforeend", `
                <div class="shopping__products__box" data-item-id="${item.id}"> 
                    <a href="./SinglePage.html">
                        <div class="shopping__products__img">
                            <p class="shopping__products__item">
                                <img class="shopping__img" src="${item.img}" alt="">
                            </p>
                            <div class="shopping__items__text">
                                <p class="shopping__items__text__mango">${item.title}</p>
                                <p>Color: <span style="font-weight: 300; color: #6f6e6e;">${item.color}</span></p>
                                <p>Size: <span style="font-weight: 300; color: #6f6e6e;">${item.size}</span></p>
                                </p>
                            </div>
                        </div>
                    </a>

                    <div class="shopping__items__cat">
                        <div class="shopping__items__price">$${item.price}</div>
                        <div class="shopping__items__price">1</div>
                        <div class="shopping__items__price">FREE</div>
                        <div class="shopping__items__price">$${item.price}</div>
                        <div class="shopping__items__price" data-item-id="${item.id}"><img src="${item.delItem}" alt=""></div>
                    </div>
                </div>
            `);
        }
    });

    // удаление товаров из "Shopping"
    shoppingItem.addEventListener("click", (ev) => {
        if (ev.target.closest(".shopping__items__price")) {
            const item = ev.target.closest(".shopping__products__box");
            if (item) {
                const itemId = item.dataset.itemId;
                localStorage.removeItem(itemId);
                updateCart(data);
                updateShopping(data);
            }
        }
    });
    // обновление цены на странице Итого
    const shoppingTotalBox = document.querySelectorAll('.shopTotal');
    shoppingTotalBox.forEach(elTotal => {
        elTotal.textContent = `$${summaPrice}`;
    });

    // Обновляем общую сумму
    const totalSum = document.querySelector('.shopping__info__total shopping__grand');
    if (totalSum) {
        totalSum.textContent = `$${summaPrice}`;
    }
}
// вешаем прослушку на карточки товара при нажатии добавляем в хранилище и обновляем всю инфу на странице
const itemBox = document.querySelectorAll('.add');
itemBox.forEach(el => {
    const addBox = document.getElementById(el.getAttribute('id'));
    addBox.addEventListener('click', (ev) => {
        ev.preventDefault();
        localStorage.setItem(addBox.id, addBox.id);
        fetchData(db)
            .then(data => {
                updateCart(data);     // Обновляем "Cart" после добавления
                updateShopping(data); // Обновляем "Shopping" после добавления
            });
    });
});

// выгрузка на страницу 
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const data = await fetchData(db);
        updateCart(data);
        updateShopping(data);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
});

// потратил 6 дней на весь этот код :))