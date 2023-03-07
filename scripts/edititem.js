document.getElementById("btn1").addEventListener("click", function(event) {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const imageURL = document.getElementById("imageURL").value;

    let data = new FormData();
    data.append('id',id);
    data.append('name', name);
    data.append('description', description);
    data.append('category', category);
    data.append('imageURL', imageURL);
    data.append('price', price);


    axios.post('http://localhost/FullStackECommerceBE/edit.php', data)
        .then(function(response) {
            alert('Data updated successfully!');
        })
        .catch(function(error) {
            alert('Error updating data.');
        });
});