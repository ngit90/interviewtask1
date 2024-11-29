// Update total price dynamically and show size options only for the selected product
const productOptions = document.querySelectorAll('.product-option input');
const totalPriceElement = document.getElementById('total-price');

// Initially hide all size options and labels
const allSizeOptions = document.querySelectorAll('.size-options1, .size-options2');
const allLabels = document.querySelectorAll('.labels');
allSizeOptions.forEach(option => option.classList.remove('active'));
allLabels.forEach(label => label.classList.remove('active'));

productOptions.forEach((option) => {
  option.addEventListener('change', (event) => {
    let price = 0;
    const relatedOptions1 = event.target.closest('.product-option').querySelector('.size-options1');
    const relatedOptions2 = event.target.closest('.product-option').querySelector('.size-options2');
    const relatedLabels = event.target.closest('.product-option').querySelector('.labels');
    
    // Reset all size options and labels visibility
    allSizeOptions.forEach(option => option.classList.remove('active'));
    allLabels.forEach(label => label.classList.remove('active'));

    if (event.target.value === "1") price = 10.00;
    else if (event.target.value === "2") price = 18.00;
    else if (event.target.value === "3") price = 24.00;

    totalPriceElement.textContent = `$${price.toFixed(2)} USD`;

    // Display the size options and labels only for the selected radio button
    if (relatedOptions1) relatedOptions1.classList.add('active');
    if (relatedOptions2) relatedOptions2.classList.add('active');
    if (relatedLabels) relatedLabels.classList.add('active');
  });
});

// If the page loads and the first radio button is already checked, display its corresponding size options and labels
if (document.querySelector('input[type="radio"]:checked')) {
  const checkedOption = document.querySelector('input[type="radio"]:checked');
  const relatedOptions1 = checkedOption.closest('.product-option').querySelector('.size-options1');
  const relatedOptions2 = checkedOption.closest('.product-option').querySelector('.size-options2');
  const relatedLabels = checkedOption.closest('.product-option').querySelector('.labels');
  
  if (relatedOptions1) relatedOptions1.classList.add('active');
  if (relatedOptions2) relatedOptions2.classList.add('active');
  if (relatedLabels) relatedLabels.classList.add('active');
}
