let imageIndex = 0;
let quantity = 0;
const images = [
  {
    src: "images/image-product-1.jpg",
    alt: "shoes",
  },
  {
    src: "images/image-product-2.jpg",
    alt: "shoes",
  },
  {
    src: "images/image-product-3.jpg",
    alt: "shoes",
  },
  {
    src: "images/image-product-4.jpg",
    alt: "shoes",
  },
];
const cart = [];

const product = {
  original: 250,
  discount: 0.5,
  name: "Fall Limited Edition Sneakers",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maiores nulla perferendis veritatis aperiam nihil. Repellendus assumenda sunt iste error, nemo magni deserunt, atque qui, mollitian odio soluta excepturi. Facilis?",
};
product.total = product.original * (1 - product.discount);

const currentImage = document.querySelector(".current-image");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const productName = document.querySelector(".name");
const description = document.querySelector(".description");
const totalParagraph = document.querySelector(".total");
const discountParagraph = document.querySelector(".discount");
const originalParagraph = document.querySelector(".original");
const quantityParagraph = document.querySelector(".quantity");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const addBtn = document.querySelector(".add-cart");
const cartQuantity = document.querySelector(".cart-quantity");
const cartContainer = document.querySelector(".cart-container");
const cartPopup = document.querySelector(".cart-popup");
const cartPrice = document.querySelector(".cart-price");
const firstSpan = document.querySelector(".first-span");
const secondSpan = document.querySelector(".second-span");
const emtpyParagraph = document.querySelector(".empty-paragraph");
const checkout = document.querySelector(".checkout");
const contentContainer = document.querySelector(".content-container");
const trash = document.querySelector(".trash");
const hamburger = document.querySelector(".hamburger");
const menuContainer = document.querySelector(".menu-container");
const closeIcon = document.querySelector(".close-icon");

productName.textContent = product.name;
description.textContent = product.description;
totalParagraph.textContent = `$${product.total}`;
discountParagraph.textContent = `${product.discount * 100}%`;
originalParagraph.textContent = `$${product.original}`;

hamburger.addEventListener("click", () => {
  menuContainer.classList.remove("hide");
});

closeIcon.addEventListener("click", () => {
  menuContainer.classList.add("hide");
});

rightArrow.addEventListener("click", () => {
  if (imageIndex < images.length - 1) {
    imageIndex++;
  } else {
    imageIndex = 0;
  }
  currentImage.setAttribute("src", images[imageIndex].src);
});

leftArrow.addEventListener("click", () => {
  if (imageIndex === 0) {
    imageIndex = images.length - 1;
  } else {
    imageIndex--;
  }
  currentImage.setAttribute("src", images[imageIndex].src);
});

minus.addEventListener("click", () => {
  if (quantity !== 0) {
    quantityParagraph.textContent = --quantity;
    if (quantity === 0) {
      addBtn.disabled = true;
    }
  }
});

plus.addEventListener("click", () => {
  addBtn.disabled = false;
  quantityParagraph.textContent = ++quantity;
});

addBtn.addEventListener("click", () => {
  cart[0] = { item: product, quantity: quantity };
  cartQuantity.classList.remove("hide");
  contentContainer.classList.remove("hide");
  checkout.classList.remove("hide");
  emtpyParagraph.classList.add("hide");
  cartQuantity.textContent = cart[0].quantity;
  firstSpan.textContent = `$${cart[0].item.total}.00 x ${cart[0].quantity} `;
  secondSpan.textContent = ` $${cart[0].item.total * cart[0].quantity}.00`;
});

cartContainer.addEventListener("click", () => {
  cartPopup.classList.toggle("hide");
  if (cart.length !== 0) {
    contentContainer.classList.remove("hide");
    checkout.classList.remove("hide");
    firstSpan.textContent = `$${cart[0].item.total}.00 x ${cart[0].quantity} `;
    secondSpan.textContent = ` $${cart[0].item.total * cart[0].quantity}.00`;
    emtpyParagraph.classList.add("hide");
  }
});

trash.addEventListener("click", () => {
  cart.splice(0, 1);
  contentContainer.classList.add("hide");
  checkout.classList.add("hide");
  emtpyParagraph.classList.remove("hide");
  cartQuantity.classList.add("hide");
});
