window.onload = function () {

    const categories = document.getElementById("colDisplay")

    // axios.get('http://localhost/E-Commerce-Website-backend/items.php')
    axios.get("http://localhost/FullStackECommerceBE/items.php")
        .then(function (response) {
            const items = response.data;
            console.log(items);

            items.forEach(item => {
                const html = `
                <div class="colDisplay">
                    <div class="rowDisplay">
                        <a class="fa fa-image"></a>
                        <h2 class="rowData">${item.item_name}</h2>
                        <h2 class="rowData">${item.item_description}</h2>
                        <h2 class="rowData">${item.item_category}</h2>
                        <h2 class="rowData">${item.item_price}</h2>
                        <h2 class="rowData">${item.item_img_src}</h2>
                        <a href="editItem.html" class="fas fa-edit"></a>   
                        <a class="fas fa-trash-alt"></a>   
                    </div>
                </div>
            `;
            categories.insertAdjacentHTML("beforeend", html);
            });

        })
        .catch(function (error) {
            console.log(error);
        });
};
