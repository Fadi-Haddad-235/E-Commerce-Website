const prod = localStorage.getItem("cartItem");
const parsed = JSON.parse(prod);
const wrapper = document.getElementById("wrapper");
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
    <button class="Addremove" id="minus">-</button>
    <p>${count}</p>
    <button class="Addremove" id="plus">+</button>
  </div>
</div>`;
});
