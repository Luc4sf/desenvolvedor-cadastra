import { Product } from "./Product";

const productWrapper = document.querySelector("#product-wrapper");
const loadProductsButton = document.getElementById("load-products-button");
const options = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
let productsIndex = 0;

function createProductItem(product: Product) {
  if (productWrapper != null) {
    productWrapper.innerHTML += `
  <div class="product-card">
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
      <button class="product-button">COMPRAR</button>
    </div>
  </div>
  `;
  }
}

export function addProducts(productsData: Product[]) {
  let quantity = 0;
  if (window.matchMedia("(max-width: 768px)").matches) {
    quantity = 4;
  } else {
    quantity = 9;
  }
  for (let i = productsIndex; i < productsIndex + quantity; i++) {
    if (productsData.length > i) {
      createProductItem(productsData[i]);
    } else if (loadProductsButton != null) {
      loadProductsButton.classList.add("hidden");
      break;
    }
  }
  productsIndex += quantity;
}
