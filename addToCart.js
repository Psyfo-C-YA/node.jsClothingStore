// Add click event handlers for "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.product-card button');
  
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    var productCard = event.target.closest('.product-card');
    var productName = productCard.querySelector('h3').textContent;
    alert('Added ' + productName + ' to the cart!');
    
    // You can perform further actions here, such as adding the product to a shopping cart or navigating to a cart page.
  });
});