document.getElementById("btn1").addEventListener("click", function(event){

    const id = document.getElementById("id1").value;
    let data = new FormData();

    data.append('id',id);

    axios.get('http://localhost/E-Commerce-Website-backend/removeitem.php',data).then((result) => {
        console.log(result);

    }).catch((err) => {
        console.error(err);
    });
    // axios({
    //     "method": "get",
    //     // "url": "http://localhost/E-Commerce-Website-backend/removeitem.php",
    //     "url": "http://localhost/FullStackECommerceBE/removeitem.php",
    //     "data": data
    // }).then((result) => {
    //     console.log(result ,id);

    // }).catch((err) => {
    //     console.error(err);
    // });
});


