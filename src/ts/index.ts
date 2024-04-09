import { Product } from "./Product";
import { getProducts } from "./api";
import { addProducts } from "./createProducts";

// const serverUrl = "http://localhost:5000";
const loadProductsButton = document.getElementById("load-products-button");

async function main() {
  // console.log(serverUrl);

  const data: Product[] | undefined = await getProducts();
  const products: Product[] = data!;

  addProducts(products);
  loadProductsButton!.addEventListener("click", () => addProducts(products));
}

document.addEventListener("DOMContentLoaded", main);
