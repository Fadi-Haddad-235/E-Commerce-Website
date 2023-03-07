window.onload = function () {

    const categories = document.getElementById("colDisplay")

    axios.get('http://localhost/E-Commerce-Website-backend/users.php')
    // axios.get("http://localhost/FullStackECommerceBE/users.php")
        .then(function (response) {
            const users = response.data;
            console.log(users);

            users.forEach(user => {
                const html = `
                    <div class="colDisplay"> 
                        <div class="rowDisplay labelMargin" id="usersData">
                            <h2 class="rowData">${user.username}</h2>
                            <h2 class="rowData" style="display: inline-block;">${user.email}</h2>
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