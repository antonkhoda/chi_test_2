const switchButton = document.querySelector(".js-payment-switch");

switchButton.addEventListener("click", function (event) {
  const classListET = event.target.classList;
  const premiumPrice = document.querySelector(".js-premium-price");
  const premiumWebsite = document.querySelector(".js-premium-website");
  const premiumHosting = document.querySelector(".js-premium-hosting");
  const enterprisePrice = document.querySelector(".js-enterprise-price");
  const enterpriseHosting = document.querySelector(".js-enterprise-hosting");

  if (!classListET.contains("button--switch--is-active")) {
    this.querySelector(".button--switch--is-active").classList.remove(
      "button--switch--is-active"
    );

    classListET.add("button--switch--is-active");

    if (classListET.contains("js-monthly-payment")) {
      premiumPrice.innerHTML = premiumPrice.innerHTML * 2;
      premiumWebsite.innerHTML = premiumWebsite.innerHTML * 2;
      premiumHosting.innerHTML = premiumHosting.innerHTML * 2;
      enterprisePrice.innerHTML = enterprisePrice.innerHTML * 2;
      enterpriseHosting.innerHTML = enterpriseHosting.innerHTML * 2;
    } else if (classListET.contains("js-yearly-payment")) {
      premiumPrice.innerHTML = 29;
      premiumWebsite.innerHTML = 10;
      premiumHosting.innerHTML = 15;
      enterprisePrice.innerHTML = 49;
      enterpriseHosting.innerHTML = 50;
    }
  }
});
