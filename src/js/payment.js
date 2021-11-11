const switchButton = document.querySelector(".js-payment-switch");
const premiumPrice = document.querySelector(".js-premium-price");
const premiumWebsite = document.querySelector(".js-premium-website");
const premiumHosting = document.querySelector(".js-premium-hosting");
const enterprisePrice = document.querySelector(".js-enterprise-price");
const enterpriseHosting = document.querySelector(".js-enterprise-hosting");
const premiumPriceValue = 29;
const premiumWebsiteValue = 10;
const premiumHostingValue = 15;
const enterprisePriceValue = 49;
const enterpriseHostingValue = 50;
let index;


switchButton.addEventListener("click", function (event) {
  if (event.target.classList.contains("js-payment-button")) {
    document.querySelectorAll('.js-payment-button').forEach(element => {
      element.classList.remove("button--switch--is-active");
    });
    event.target.classList.add("button--switch--is-active");

    index = event.target.dataset.x;
    premiumPrice.innerHTML = premiumPriceValue * index;
    premiumWebsite.innerHTML = premiumWebsiteValue * index;
    premiumHosting.innerHTML = premiumHostingValue * index;
    enterprisePrice.innerHTML = enterprisePriceValue * index;
    enterpriseHosting.innerHTML = enterpriseHostingValue * index;
  }
});