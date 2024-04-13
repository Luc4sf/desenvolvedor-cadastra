import {
  applyFilter,
  clearFilterTemp,
  setFilter,
  setFilterTemp,
  startFilterTemp,
} from "./filter";

const overlayMenu: HTMLElement = document.getElementById("overlay-menu");

const closeFilterButton: HTMLElement = document.getElementById(
  "close-filter-button"
);
const filterProductsButton: HTMLElement = document.getElementById(
  "filter-products-button"
);
const filterMenu: HTMLElement = document.getElementById("overlay-menu-filter");
const colorsCheckbox: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  "input[name=checkbox-color]"
);
const overlayColorsCheckbox: NodeListOf<HTMLInputElement> =
  document.querySelectorAll("input[name=overlay-checkbox-color]");
const sizeCheckbox: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  "input[name=checkbox-size]"
);
const overlaySizeCheckbox: NodeListOf<HTMLInputElement> =
  document.querySelectorAll("input[name=overlay-checkbox-size]");
const priceRadio: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  "input[name=radio-price]"
);
const overlayPriceRadio: NodeListOf<HTMLInputElement> =
  document.querySelectorAll("input[name=overlay-radio-price]");

const overlayApplyButton: HTMLElement = document.getElementById(
  "overlay-apply-button"
);
const overlayClearButton: HTMLElement = document.getElementById(
  "overlay-clear-button"
);

const showColorsButton: HTMLElement = document.getElementById("show-colors");
const hiddenColors: HTMLElement = document.getElementById("hidden-colors");

export function startFilter() {
  // Open overlay filter menu in mobile
  filterProductsButton!.addEventListener("click", () => {
    overlayMenu.classList.remove("hidden");
    filterMenu.classList.remove("hidden");
    startFilterTemp(
      overlayColorsCheckbox,
      overlaySizeCheckbox,
      overlayPriceRadio
    );
  });
  // Close overlay filter menu in mobile
  closeFilterButton.onclick = () => {
    overlayMenu.classList.add("hidden");
    filterMenu.classList.add("hidden");
  };

  // Set event listener for the filter buttons
  colorsCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      const element = event.target as HTMLInputElement;
      setFilter(element);
    });
  });
  sizeCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      const element = event.target as HTMLInputElement;
      setFilter(element);
    });
  });
  priceRadio.forEach((radio) => {
    radio.addEventListener("click", (event) => {
      const element = event.target as HTMLInputElement;
      setFilter(element);
    });
  });
  // Set event listener for the filter buttons in mobile
  overlayColorsCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      const element = event.target as HTMLInputElement;
      setFilterTemp(element);
    });
  });
  overlaySizeCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      const element = event.target as HTMLInputElement;
      setFilterTemp(element);
    });
  });
  overlayPriceRadio.forEach((radio) => {
    radio.addEventListener("click", (event) => {
      const element = event.target as HTMLInputElement;
      setFilterTemp(element);
    });
  });
  overlayApplyButton!.addEventListener("click", () => {
    applyFilter();
    overlayMenu.classList.add("hidden");
    filterMenu.classList.add("hidden");
  });
  overlayClearButton!.addEventListener("click", () => {
    clearFilterTemp(
      overlayColorsCheckbox,
      overlaySizeCheckbox,
      overlayPriceRadio
    );
  });

  // Set event listener for the show colors button
  showColorsButton!.addEventListener("click", () => {
    if (hiddenColors.classList.contains("hidden")) {
      hiddenColors.classList.remove("hidden");
    }
    if (!showColorsButton.classList.contains("hidden")) {
      showColorsButton.classList.add("hidden");
    }
  });
}
