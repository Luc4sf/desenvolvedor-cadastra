import { Product } from "./Product";
import { reloadProducts } from "./products";
let order: number = 0;

// Order items from lower to higher price
function lowerPrice(a: Product, b: Product) {
  return a.price - b.price;
}

// Order items from higher to lower price
function higherPrice(a: Product, b: Product) {
  return b.price - a.price;
}

// Order items from most recent
function mostRecent(a: Product, b: Product) {
  const dataA: Date = new Date(a.date);
  const dataB: Date = new Date(b.date);

  return dataA.getTime() - dataB.getTime();
}

// Orders an array of products and returns the ordered array
export function orderItems(products: Product[]) {
  let productsOrdered: Product[] = products;

  switch (order) {
    case 1:
      productsOrdered = products.slice().sort(mostRecent);
      break;
    case 2:
      productsOrdered = products.slice().sort(lowerPrice);
      break;
    case 3:
      productsOrdered = products.slice().sort(higherPrice);
      break;
  }
  return productsOrdered;
}

// Sets how to order
export function setOrder(value: number) {
  order = value;
  reloadProducts();
}
