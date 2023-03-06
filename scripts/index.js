window.onload = function() {
    const categories = document.getElementById("new-arrivals")
  
    axios.get('http://localhost/E-Commerce-Website-backend/index.php')
      .then(function(response) {
        const items = response.data;
        // console.log(items);
  
        items.forEach(item => {
          const html = `
            <div class="box">
              <div class="image">
                <a href="#"><img src="${item.src}" alt=""></a>
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
          categories.insertAdjacentHTML("beforeend", html);
        });
  
      })
      .catch(function(error) {
        console.log(error);
      });
  };