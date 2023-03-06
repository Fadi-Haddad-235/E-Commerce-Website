
document.getElementById("removeItem").addEventListener("click", deleteItem());

function deleteItem() {
    id=1;
    if (confirm("Are you sure you want to delete this item?")) {
      // Send a DELETE request to the server-side script
      fetch("deleteitem.php?id=" + id, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.message); // Print a message from the server-side script
        location.reload(); // Refresh the page to update the table
      })
      .catch(error => {
        console.error(error);
      });
    }
  }