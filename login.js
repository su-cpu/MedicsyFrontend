function login() {

    if (document.getElementById('email').value == localStorage.getItem('email') &&
        document.getElementById('password').value == localStorage.getItem('password')) {

        window.location.href = "index.html";
        alert('successfully logging in');
    }
    else {
        alert('incorrect email and password');
    }

}