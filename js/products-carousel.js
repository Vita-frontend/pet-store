const carousel = document.querySelector('.products__animated-carousel');
const carouselInner = document.querySelector('.products__animated-carousel-inner');
const prevButton = document.querySelector('.button-carousel-prev');
const nextButton = document.querySelector('.button-carousel-next');
const productCard = document.querySelectorAll('.products__list');

let currentIndex = 0;

function updateCarrousel() {
    carouselInner.style.transform = `translateX(-${currentIndex*100}%)`;
}

prevButton.addEventListener ('click', () => {
    currentIndex = (currentIndex - 1 + productCard.length) % productCard.length;
    updateCarrousel();
})

nextButton.addEventListener ('click', () => {
    currentIndex = (currentIndex + 1) % productCard.length;
    updateCarrousel();
})