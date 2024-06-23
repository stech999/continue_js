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


function updateShopping(data) {
    const shoppingItem = document.querySelector('.shopping__products'); // место выгрузки
    shoppingItem.innerHTML = ''; // Очищаем корзину
    data.forEach(item => {
        const ls = localStorage.getItem(item.id);
        if (item.id === ls) {
            shoppingItem.insertAdjacentHTML("beforeend", `
                <div class="shopping__products__box">
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
                        <div class="shopping__items__price">2</div>
                        <div class="shopping__items__price">FREE</div>
                        <div class="shopping__items__price">$${item.price * 2}</div>
                        <div id="${item.id}" class="shopping__items__price"><img src="${item.delItem}" alt=""></div>
                    </div>
                </div>
            `)
        }
    });


    // удаление товаров в локал хранилище
    const shopping__items__price = document.querySelectorAll('.shopping__items__price');
    shopping__items__price.forEach(shopItem => {
        const shopDel = document.getElementById(shopItem.getAttribute('id'));
        shopItem.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem(shopDel.id);
        });
    });

    // удалениe товаров в корзине
    shoppingItem.addEventListener("click", ev => {
        if (ev.target.closest(".shopping__items__price")) {
            const item = ev.target.closest(".shopping__products");
            if (item) {
                item.remove();
            }
        }
    })
}


document.addEventListener("DOMContentLoaded", async () => {
    try {
        const data = await fetchData(db);
        updateShopping(data);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
});