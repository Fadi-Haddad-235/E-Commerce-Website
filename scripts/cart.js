const prod = localStorage.getItem("cartItem");
const parsed = JSON.parse(prod);
const wrapper = document.getElementById("wrapper");
const total = document.getElementById("total");
let sum = 0;
let count = 1;
let minus;
let plus;

parsed.forEach((item) => {
  wrapper.innerHTML += `<div class="checkout">
  <div class="prodImageName">
    <div class="prodImage">
      <img src="${item.item_img_scr}" alt="" />
    </div>
    <div class="prodName">${item.item_name}</div>
  </div>
  <div class="prodPrice">${item.item_price}$</div>
  <div class="prodAddRemove">
    <button class="Addremove minus" value="${item.item_price}">-</button>
    <p>${count}</p>
    <button class="Addremove plus" id="plus" value="${item.item_price}">+</button>
  </div>
</div>`;

  sum += item.item_price;
});

total.innerHTML = `Total:${sum}$`;

minus = document.querySelectorAll(".minus");
plus = document.querySelectorAll(".plus");

plus.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    sum += parseInt(button.value);
    total.innerHTML = `Total:${sum}$`;
  });
});

minus.forEach((button) => {
  button.addEventListener("click", () => {
    count -= 1;
    sum -= parseInt(button.value);
    total.innerHTML = `Total:${sum}$`;
  });
});

const proceed = document.getElementById("proceed");
proceed.addEventListener("click", () => {
  window.location.href = "./checkout.html";
});

const cart = document.getElementById("cart");
const laptopbutton = document.getElementById("laptopbutton");
const phonebutton = document.getElementById("phonebutton");
const headsetbutton = document.getElementById("headsetbutton");
const tabletbutton = document.getElementById("tabletbutton");
const gamingbutton = document.getElementById("gamingbutton");
const login = document.getElementById("login");

cart.addEventListener("click", () => {
  window.location.href = "./cart.html";
});

login.addEventListener("click", () => {
  window.location.href = "./login.html";
});

// laptopbutton.addEventListener("click", () => {
//   window.location.href = "./category.html?category=laptops";
// });

// phonebutton.addEventListener("click", () => {
//   window.location.href = "./category.html?category=phones";
// });

// headsetbutton.addEventListener("click", () => {
//   window.location.href = "./category.html?category=headseats";
// });

// tabletbutton.addEventListener("click", () => {
//   window.location.href = "./category.html?category=headseats";
// });
// gamingbutton.addEventListener("click", () => {
//   window.location.href = "./category.html?category=gaming";
// });

localStorage.setItem("sum", sum);
