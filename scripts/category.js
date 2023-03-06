window.onload = function () {
  const searchParams = new URLSearchParams(window.location.search);
  const category = searchParams.get("category");

  const categories_element = document.getElementById("category");
  const category_name = document.getElementById("category-name");

  axios
    .get(
      `http://localhost/E-Commerce-Website-backend/category.php?category=${category}`
    )
    .then((response) => {
      console.log(response.data); // print response data to console
      const items = response.data;
      console.log(items[0].category);
      category_name.innerText = items[0].category.toUpperCase();
      items.forEach((item) => {
        const html = `
              <div class="box">
                <div class="image">
<<<<<<< HEAD
                  <a href="http://localhost/E-Commerce-Website-backend/productdetails.html?id=${item.id}"><img src="${item.src}" alt=""></a>
=======
                  <a href="http://localhost/E-Commerce-Website-frontend/productdetails.html?category=${category}&id=${item.id}"><img src="${item.src}" alt=""></a>
>>>>>>> 459fdac133464f5e16041937c2d4917eeef42a87
                </div>
                <div class="info">
                  <h3 class="title">${item.name}</h3>
                  <div class="subinfo">
                    <div class="price">${item.price}</div>
                  </div>
                  <div class="add-remove-btn">
                    <button class="add-button">add to cart</button>
                    <button class="remove-button">add to favorite</button>
                  </div>
                </div>
              </div>
            `;
        categories_element.insertAdjacentHTML("beforeend", html);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
