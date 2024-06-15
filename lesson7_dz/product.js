const itemDataBase = JSON.parse(itemDb);
const cardsSection = document.querySelector('.cards__wrapper');
itemDataBase.forEach(el => {

    const cardsItem = document.createElement('div');
    cardsItem.classList.add('cards__item');

    const itemImg = document.createElement('div');
    itemImg.classList.add('item-img');
    itemImg.style.background = `url(${el.backgr})`;

    const itemImgHover = document.createElement('div');
    itemImgHover.classList.add('item-img__hover');
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('item-img__hover-btn');
    buttonEl.textContent = 'Add to Cart';

    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');
    const h4El = document.createElement('h4');
    h4El.classList.add('item-title');
    h4El.textContent = el.titl;
    const pEl = document.createElement('p');
    pEl.classList.add('item-text');
    pEl.textContent = el.desc;
    const p2El = document.createElement('p');
    p2El.classList.add('item-price');
    p2El.textContent = el.price;

    cardsSection.appendChild(cardsItem);
    cardsItem.appendChild(itemImg);
    itemImg.appendChild(itemImgHover);
    itemImgHover.appendChild(buttonEl);
    cardsItem.appendChild(itemDescription);
    itemDescription.appendChild(h4El);
    itemDescription.appendChild(pEl);
    itemDescription.appendChild(p2El);

});