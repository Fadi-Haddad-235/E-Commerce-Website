const baseUrl = "http://localhost/E-Commerce-Website-Backend";

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const category = searchParams.get("category");
const info = document.getElementById("info");
const similarProducts = document.getElementById("similarProducts");

axios({
  method: "get",
  url: `${baseUrl}/productdetails.php?category=${category}&id=${id}`,
}).then((res) => {
  const similar = res.data.similar;
  const prod = res.data.product;
  info.innerHTML = `  <div class="productImage">
<img src="${prod.item_img_src}" alt="" />
</div>
<div class="prodDetails">
<div class="productName">${prod.item_name}</div>
<div class="productPrice">${prod.item_price}$</div>

<p>
  ${prod.item_description}
</p>
<div class="button">
  <button class="productAction">Add to cart</button>
  <button class="productAction">Favorite</button>
</div>
</div>`;

  similar.forEach((object) => {
    console.log(object);
    similarProducts.innerHTML += `<div class="suggestion">
  <img src="${object.item_img_src}" alt="" />
  <div class="suggestionDetails">
    <p>Product Name:${object.item_name}</p>
    <p>Price: ${object.item_price}$</p>
  </div>
</div>`;
  });
});
