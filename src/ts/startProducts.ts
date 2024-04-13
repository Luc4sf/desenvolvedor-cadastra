import { Product } from "./Product";
import { addProducts, setsProducts } from "./products";
const loadProductsButton: HTMLElement = document.getElementById(
  "load-products-button"
);

export function startProducts(products: Product[]) {
  // Sets quantity of products to be displayed
  let productsQuantity: number = 0;
  if (window.matchMedia("(max-width: 1024px)").matches) {
    productsQuantity = 4;
  } else {
    productsQuantity = 9;
  }

  // Add listener to load products button
  loadProductsButton!.addEventListener("click", () => addProducts());
  setsProducts(products, productsQuantity);
}
