const selectedCategory = localStorage.getItem("selectedCategory");
const selectedProduct = localStorage.getItem("selectedProduct");
const baseUrl = "http://localhost/E-Commerce-Website-Backend";

axios({
  method: "get",
  url: `${baseUrl}/productdetails.php?category=${selectedCategory}&id=${selectedProduct}`,
}).then((res) => {
  console.log(res);
});
