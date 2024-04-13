import { Product } from "./Product";
import { addItems } from "./cart";
import { filterProducts } from "./filter";
import { orderItems } from "./order";

const productWrapper: HTMLElement = document.getElementById("product-wrapper");
const loadProductsButton: HTMLElement = document.getElementById(
  "load-products-button"
);
const options = { maximumFractionDigits: 2, minimumFractionDigits: 2 };

// Quantity of products in display
let productsIndex: number = 0;
// Desired quantity of products to be displayed
let productsQuantity: number = 0;
// List of products from the database
let productsList: Product[] = [];

// Creates the product card in HTML and adds listener for the buttons
function createProductItem(product: Product) {
  const productCard: HTMLDivElement = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.innerHTML = `
  <div class="product">
      <img class="product-thumbnail" src=${product.image} alt="" />
      <h2 class="product-title">${product.name.toUpperCase()}</h2>
      <p class="product-price">R$ ${product.price.toLocaleString(
        "pt-BR",
        options
      )}</p>
      <p class="product-installment">até ${
        product.parcelamento[0]
      }x de R$${product.parcelamento[1].toLocaleString("pt-BR", options)}</p>
      <button type="button" class="product-button">COMPRAR</button>
    </div>`;

  productCard
    .querySelector(".product-button")
    ?.addEventListener("click", () => {
      addItems(product);
    });
  productWrapper.append(productCard);
}

// Receives the products from the database and sets quantity based on screen width
export function setsProducts(products: Product[], quantity: number) {
  productsList = products;
  productsQuantity = quantity;
  reloadProducts();
}

// Show more products with the load more button
export function addProducts() {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    productsQuantity = productsIndex + 4 - (productsIndex % 4);
  } else {
    productsQuantity = productsIndex + 9 - (productsIndex % 9);
  }
  reloadProducts();
}

// Renders the correct products in the screen
export function reloadProducts() {
  let products: Product[];
  if (productWrapper != null) {
    productWrapper.innerHTML = "";
    productsIndex = 0;
  }

  products = orderItems(filterProducts(productsList));
  if (!products.length) {
    loadProductsButton.classList.add("hidden");
  }

  for (let i = 0; i < productsQuantity; i++) {
    if (products.length > i) {
      createProductItem(products[i]);
      productsIndex++;
      if (products.length == i + 1) {
        loadProductsButton.classList.add("hidden");
      } else if (loadProductsButton.classList.contains("hidden")) {
        loadProductsButton.classList.remove("hidden");
      }
    }
  }
}
