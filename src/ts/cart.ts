import { CartItem } from "./CartItem";
import { Product } from "./Product";

const localStorageKey = "@Cadastra:cart";

const cartCount: HTMLElement = document.getElementById("cart-count");
const cartButton: HTMLElement = document.getElementById("cart-button");

let cart: CartItem[] = [];

// Add items to cart
export function addItems(product: Product) {
  let cartItem: CartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
  };

  if (
    !cart.some((item: CartItem) => {
      if (item.id == cartItem.id) {
        item.quantity++;
        return true;
      }
    })
  ) {
    cart.push(cartItem);
  }
  localStorage.setItem(localStorageKey, JSON.stringify(cart));

  updateCart();
}

// Initialization of cart, getting data from local storage if it exists
export function startCart() {
  if (localStorage.getItem(localStorageKey)) {
    cart = JSON.parse(localStorage.getItem(localStorageKey));
  }

  cartButton.addEventListener("click", () => showCart());
  updateCart();
}

// Update cart count
function updateCart() {
  cartCount.textContent = cart.length.toString();
}

// Prints in the terminal the cart
function showCart() {
  console.log(cart);
}
