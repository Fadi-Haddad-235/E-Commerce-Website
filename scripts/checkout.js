const data = document.getElementById("items");
const total = document.getElementById("total");
let sum = 0;
const prod = localStorage.getItem("cartItem");
console.log(prod);
const totalSum = localStorage.getItem("sum");
const parsed = JSON.parse(prod);
const parsedTotal = JSON.parse(totalSum);
parsed.forEach((item) => {
    data.innerHTML += `<div class="columns">
    <div >${item.item_name}</div>
    <div >${item.item_price}</div>
  </div>`;
    sum += item.item_price;
  });
  total.innerHTML = `${sum}`;
  