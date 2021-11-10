const switchButton = document.querySelector(".js-payment-switch");
const premiumPrice = document.querySelector(".js-premium-price");
const premiumWebsite = document.querySelector(".js-premium-website");
const premiumHosting = document.querySelector(".js-premium-hosting");
const enterprisePrice = document.querySelector(".js-enterprise-price");
const enterpriseHosting = document.querySelector(".js-enterprise-hosting");
const pPriceValue = 29;
const pWebsiteValue = 10;
const pHostingValue = 15;
const ePriceValue = 49;
const eHostingValue = 50;
let index;


switchButton.addEventListener("click", function (event) {
  if (!event.target.classList.contains("button--switch--is-active")) {
    this.querySelector(".button--switch--is-active").classList.remove(
      "button--switch--is-active"
    );
  }

  event.target.classList.add("button--switch--is-active");

  index = event.target.dataset.x;
  premiumPrice.innerHTML = pPriceValue * index;
  premiumWebsite.innerHTML = pWebsiteValue * index;
  premiumHosting.innerHTML = pHostingValue * index;
  enterprisePrice.innerHTML = ePriceValue * index;
  enterpriseHosting.innerHTML = eHostingValue * index;
});