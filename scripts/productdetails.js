const baseUrl = "http://localhost/E-Commerce-Website-Backend";

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const category = searchParams.get("category");
const info = document.getElementById("info");
const similarProducts = document.getElementById("similarProducts");
const goToCart = document.getElementById("cart");

goToCart.addEventListener("click", () => {
  window.location.href = "./cart.html";
});

axios({
  method: "get",
  url: `${baseUrl}/productdetails.php?category=${category}&id=${id}`,
}).then((res) => {
  const similar = res.data.similar;
  const prod = res.data.product;

  info.innerHTML = `<div class="productImage">
  <img src="${prod.item_img_src}" alt="" />
  </div>
  <div class="prodDetails">
  <div class="productName">${prod.item_name}</div>
  <div class="productPrice">${prod.item_price}$</div>
  
  <p>
  ${prod.item_description}
  </p>
  <div class="button">
  <button class="productAction" id="addToCart">Add to cart</button>
  <button class="productAction">Favorite</button>
  </div>
  </div>`;

  similar.forEach((object) => {
    console.log(object);
    similarProducts.innerHTML += `<div class="suggestion">
    <a href="http://localhost/E-Commerce-Website-frontend/productdetails.html?category=${object.item_category}&id=${object.item_id}">
    <img src="${object.item_img_src}" alt="" />
    <div class="suggestionDetails">
    <p>Product Name:${object.item_name}</p>
    <p>Price: ${object.item_price}$</p>
    </div>
    </div>`;
  });
  const cart = document.getElementById("addToCart");
  cart.addEventListener("click", () => {
    const currentCart = localStorage.getItem("cartItem");
    let parsed;

    if (currentCart.length > 2) {
      parsed = JSON.parse(currentCart);
      parsed.push(prod);
    } else {
      parsed = [prod];
    }

    localStorage.setItem("cartItem", JSON.stringify(parsed));
  });
});

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
