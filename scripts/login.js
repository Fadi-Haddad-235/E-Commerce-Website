let signin_btn = document.getElementById('signin');
signin_btn.addEventListener('click', signin);

function signin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    axios.post('http://localhost/E-Commerce-Website-backend/login.php', data).then(function (res) {
        console.log(res.data);
        let obj =res.data;
        sessionStorage.setItem('user_id', obj.user_id);
        console.log(window.sessionStorage.getItem('user_id'));

    }).catch(function (err) {
        console.log(err);
    })

}