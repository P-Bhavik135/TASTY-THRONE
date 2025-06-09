
function addToCart(itemName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: itemName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(itemName + " added to cart!");
}


function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  cartItems.innerHTML = "";

  let total = 0;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <tr>
        <td>₹{item.name}</td>
        <td>₹{item.price.toFixed(2)}</td>
        <td><button onclick="removeItem(₹{index})">Remove</button></td>
      </tr>
    `;
  });

  totalPrice.innerText = `Total: ₹₹{total.toFixed(2)}`;
}


function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}


function clearCart() {
  localStorage.removeItem('cart');
  displayCart();
}


if (document.getElementById('cart-items')) {
  displayCart();
}
