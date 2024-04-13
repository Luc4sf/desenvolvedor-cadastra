import { setOrder } from "./order";

const orderContainer: HTMLElement = document.getElementById("order-container");
const options: NodeListOf<HTMLElement> = document.querySelectorAll(".option");

const overlayMenu: HTMLElement = document.getElementById("overlay-menu");

const closeOrderButton: HTMLElement =
  document.getElementById("close-order-button");
const orderProductsButton: HTMLElement = document.getElementById(
  "order-products-button"
);
const orderMenu: HTMLElement = document.getElementById("overlay-menu-order");
const overlayOrderRecentButton: HTMLElement = document.getElementById(
  "overlay-order-recent"
);
const overlayOrderLowerButton: HTMLElement = document.getElementById(
  "overlay-order-lower"
);
const overlayOrderHigherButton: HTMLElement = document.getElementById(
  "overlay-order-higher"
);

export function startOrder() {
  // Open overlay order menu in mobile
  orderProductsButton!.addEventListener("click", () => {
    overlayMenu.classList.remove("hidden");
    orderMenu.classList.remove("hidden");
  });
  // Close overlay order menu in mobile
  closeOrderButton!.addEventListener("click", () => {
    overlayMenu.classList.add("hidden");
    orderMenu.classList.add("hidden");
  });

  // Set event listener for the order buttons in mobile
  overlayOrderRecentButton!.addEventListener("click", () => {
    setOrder(1);
    overlayMenu.classList.add("hidden");
    orderMenu.classList.add("hidden");
  });
  overlayOrderLowerButton!.addEventListener("click", () => {
    setOrder(2);
    overlayMenu.classList.add("hidden");
    orderMenu.classList.add("hidden");
  });
  overlayOrderHigherButton!.addEventListener("click", () => {
    setOrder(3);
    overlayMenu.classList.add("hidden");
    orderMenu.classList.add("hidden");
  });

  // Open and close order options
  orderContainer.addEventListener("click", () => {
    const option: HTMLElement = document.getElementById("order-options");
    if (option.style.display != "block") {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });

  // Set event listener for the order options
  options.forEach((option: HTMLElement) => {
    option.addEventListener("click", function () {
      setOrder(+option.getAttribute("value"));
    });
  });
}
