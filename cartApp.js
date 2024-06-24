// Initialize the cart when the script is loaded
initializeCart();

// Event listener for adding items to the cart
document.getElementById('addItemForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const itemName = document.getElementById('itemName').value;
  const itemPrice = parseFloat(document.getElementById('itemPrice').value);
  const itemId = Date.now(); // Use timestamp as a unique ID

  const item = {
    id: itemId,
    name: itemName,
    price: itemPrice
  };

  addItem(item);

  // Clear the form fields
  document.getElementById('addItemForm').reset();
});

// Event listener for displaying the cart contents
document.getElementById('displayCartButton').addEventListener('click', displayCart);

function initializeCart() {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
}

function addItem(item) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(itemId) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart = cart.filter(item => item.id !== itemId);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);
}
