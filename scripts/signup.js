let signup_btn = document.getElementById('signup_btn');
signup_btn.addEventListener('click', signup);

function signup() {

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = new FormData();
    data.append('username', username);
    data.append('email', email);
    data.append('password', password);

    
    axios({
        "method": "post",
        "url": "http://localhost/E-Commerce-Website-backend/signup.php",
        "data": data
    }).then((result) => {
        console.log(result.data);

    }).catch((err) => {
        console.error(err);
    });
}

