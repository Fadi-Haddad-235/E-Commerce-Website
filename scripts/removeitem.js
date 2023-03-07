document.getElementById("btn1").addEventListener("click", deleteItem);


function deleteItem() {
    const id = document.getElementById("id").value;
    console.log(id);

    let data = new FormData();

    data.append('id',parseInt(id));

    axios({
        method: "get",
        // "url": "http://localhost/E-Commerce-Website-backend/removeitem.php",
        url: "http://localhost/FullStackECommerceBE/removeitem.php",
        data: data
    }).then((result) => {
        console.log(result ,id);

    }).catch((err) => {
        console.error(err);
    });
}