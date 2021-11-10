const carousel = document.querySelector(".js-carousel__gallery");
const carouselList = document.querySelector(".js-carousel__gallery-list");
const carouselListEl = document.querySelectorAll(".js-carousel__gallery-list-item");
const carouseBtnPrev = document.querySelector(".js-carousel__prev");
const carouseBtnNext = document.querySelector(".js-carousel__next");

let itemWidth = 170;
let itemStep = 1;
let carouselPosition = 0;
let itemWisibleCount;

carouselList.style.width = itemWidth * carouselListEl.length + "px";

carouseBtnPrev.addEventListener("click", function () {
    carouselPosition += itemWidth * itemStep;
    carouselPosition = Math.min(carouselPosition, 0);
    carouselList.style.marginLeft = carouselPosition + "px";
});

carouseBtnNext.addEventListener("click", function () {
    itemWisibleCount = Math.round(carousel.offsetWidth / itemWidth);
    carouselPosition -= itemWidth * itemStep;
    carouselPosition = Math.max(carouselPosition, -itemWidth * (carouselListEl.length - itemWisibleCount));
    carouselList.style.marginLeft = carouselPosition + "px";
});

window.addEventListener("resize", function () {
    itemWisibleCount = Math.round(carousel.offsetWidth / itemWidth);
    carouselPosition = Math.max(carouselPosition, -itemWidth * (carouselListEl.length - itemWisibleCount));
    carouselList.style.marginLeft = carouselPosition + "px";
});