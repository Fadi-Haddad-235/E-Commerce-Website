const prod = localStorage.getItem("cartItem");
const parsed = JSON.parse(prod);
const wrapper = document.getElementById("wrapper");
const exit = document.getElementById("exit");
let total = 0;
let count = 1;

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
    <button class="Addremove minus">-</button>
    <p>${count}</p>
    <button class="Addremove plus" id="plus">+</button>
  </div>
</div>`;

  total += item.item_price;
});

exit.innerHTML = `<p>Total:${total}$</p>
<button class="proceed">Proceed to checkout</button>`;

const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");

plus.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
  });
});

minus.forEach((button) => {
  button.addEventListener("click", () => {
    count -= 1;
  });
});
