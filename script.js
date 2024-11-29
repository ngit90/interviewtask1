// Update total price dynamically
const productOptions = document.querySelectorAll('.product-option input');
const totalPriceElement = document.getElementById('total-price');

productOptions.forEach((option) => {
  option.addEventListener('change', (event) => {
    let price = 0;
    if (event.target.value === "1") price = 10.00;
    else if (event.target.value === "2") price = 18.00;
    else if (event.target.value === "3") price = 24.00;

    totalPriceElement.textContent = `$${price.toFixed(2)} USD`;
  });
});
