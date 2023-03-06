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
