import { Product } from "./Product";
import { reloadProducts } from "./products";

let filters: string[][] = [[], [], []];
let tempFilters: string[][] = [[], [], []];
let priceRange: string[][] = [
  ["0", "50"],
  ["51", "150"],
  ["151", "300"],
  ["301", "500"],
  ["500", "99999"],
];

// Set filters variable with checkboxes and radio
export function setFilter(element: HTMLInputElement) {
  if (element.name === "checkbox-color") {
    if (element.checked) {
      filters[0].push(element.value);
    } else {
      filters[0].splice(filters[0].indexOf(element.value), 1);
    }
  }
  if (element.name === "checkbox-size") {
    if (element.checked) {
      filters[1].push(element.value);
    } else {
      filters[1].splice(filters[1].indexOf(element.value), 1);
    }
  }
  if (element.name === "radio-price") {
    if (filters[2][0] == priceRange[+element.value][0]) {
      filters[2] = [];
      element.checked = false;
    } else {
      filters[2] = priceRange[+element.value];
    }
  }
  reloadProducts();
}

// Set tempFilters variable with checkboxes and radio in mobile
export function setFilterTemp(element: HTMLInputElement) {
  if (element.name === "overlay-checkbox-color") {
    if (element.checked) {
      tempFilters[0].push(element.value);
    } else {
      tempFilters[0].splice(tempFilters[0].indexOf(element.value), 1);
    }
  }
  if (element.name === "overlay-checkbox-size") {
    if (element.checked) {
      tempFilters[1].push(element.value);
    } else {
      tempFilters[1].splice(tempFilters[1].indexOf(element.value), 1);
    }
  }
  if (element.name === "overlay-radio-price") {
    if (tempFilters[2][0] == priceRange[+element.value][0]) {
      tempFilters[2] = [];
      element.checked = false;
    } else {
      tempFilters[2] = priceRange[+element.value];
    }
  }
}

// Apply filters in mobile
export function applyFilter() {
  filters = JSON.parse(JSON.stringify(tempFilters));
  reloadProducts();
}

// Receive value from the definitive filter variable (filters) in the temporary variable (tempFilters)
export function startFilterTemp(
  colorsCheckbox: NodeListOf<HTMLInputElement>,
  sizeCheckbox: NodeListOf<HTMLInputElement>,
  priceRadio: NodeListOf<HTMLInputElement>
) {
  tempFilters = JSON.parse(JSON.stringify(filters));
  resetFilter(colorsCheckbox, sizeCheckbox, priceRadio);
}

// Render correctly the checkboxes and radio, based on the actual filters
function resetFilter(
  colorsCheckbox: NodeListOf<HTMLInputElement>,
  sizeCheckbox: NodeListOf<HTMLInputElement>,
  priceRadio: NodeListOf<HTMLInputElement>
) {
  colorsCheckbox.forEach((element: HTMLInputElement) => {
    if (tempFilters[0].includes(element.value)) {
      element.checked = true;
    } else {
      element.checked = false;
    }
  });

  sizeCheckbox.forEach((element: HTMLInputElement) => {
    if (tempFilters[1].includes(element.value)) {
      element.checked = true;
    } else {
      element.checked = false;
    }
  });

  priceRadio.forEach((element: HTMLInputElement) => {
    if (tempFilters[2][0] == priceRange[+element.value][0]) {
      element.checked = true;
    } else {
      element.checked = false;
    }
  });
}

// Set temporary filter to clean, must apply later to clear the definitive filter
export function clearFilterTemp(
  colorsCheckbox: NodeListOf<HTMLInputElement>,
  sizeCheckbox: NodeListOf<HTMLInputElement>,
  priceRadio: NodeListOf<HTMLInputElement>
) {
  tempFilters = [[], [], []];
  resetFilter(colorsCheckbox, sizeCheckbox, priceRadio);
}

// Filter items by color
function filterColor(products: Product[], colors: string[]) {
  if (!colors || colors.length === 0) return products;
  return products.filter((product) => colors.includes(product.color));
}

// Filter items by size
function filterSize(products: Product[], sizes: string[]) {
  if (!sizes || sizes.length === 0) return products;
  return products.filter((product) =>
    product.size.some((size) => sizes.includes(size))
  );
}

// Filter items by price
function filterPrice(products: Product[], maxPrice: number, minPrice: number) {
  return products.filter(
    (product) => product.price >= maxPrice && product.price <= minPrice
  );
}

// Filters an array of products and returns the filtered array
export function filterProducts(products: Product[]) {
  let productsFiltered: Product[] = [];

  productsFiltered = filterColor(products, filters[0]);
  productsFiltered = filterSize(productsFiltered, filters[1]);
  if (filters[2][0] !== undefined && filters[2][1] !== undefined) {
    let minPrice = +filters[2][0];
    let maxPrice = +filters[2][1];
    productsFiltered = filterPrice(productsFiltered, minPrice, maxPrice);
  }
  return productsFiltered;
}
