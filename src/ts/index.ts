import { Product } from "./Product";
import { getProducts } from "./api";
import { startCart } from "./cart";
import { startProducts } from "./startProducts";
import { startFilter } from "./startFilter";
import { startOrder } from "./startOrder";

async function main() {
  const products = (await getProducts()) as Product[];

  // Start product functions and listeners
  startProducts(products);

  // Start filter functions and listeners
  startFilter();

  // Start order functions and listeners
  startOrder();

  // Start cart functions and listeners
  startCart();
}

document.addEventListener("DOMContentLoaded", main);
