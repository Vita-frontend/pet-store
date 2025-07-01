const response = await fetch('api/products.json');
const cards = await response.json();
renderCard(cards);

function renderCard(cards) {
    let html = "";
    for (const card of cards) {
        html += `<article class="products__card">
        <img src="${card.img}" alt="${card.title}">
        <h3 class="products__title">${card.title}</h3>
        <p class="products__text">${card.price}</p>
        <a class="button-card" href="#">Add to Cart</a>
    </article>`
    }
    const servicesContainer = document.querySelector(".products__list");
    servicesContainer.innerHTML = html;
}

