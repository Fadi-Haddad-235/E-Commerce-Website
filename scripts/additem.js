document.getElementById("btn1").addEventListener("click", send);

function send() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const imageURL = document.getElementById("imageURL").value;

    let data = new FormData();
    data.append('name', name);
    data.append('price', price);
    data.append('description', description);
    data.append('category', category);
    data.append('imageURL', imageURL);

    axios({
        "method": "post",
        // "url": "http://localhost/E-Commerce-Website-backend/signup.php",
        "url": "http://localhost/FullStackECommerceBE/additem.php",
        "data": data
    }).then((result) => {
        console.log(result)

    }).catch((err) => {
        console.error(err)
    });
}
