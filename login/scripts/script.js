let username;

function getUsername() {
    const password = document.querySelector('.password')
    const user = document.querySelector('.user');
    if (user.value === '' || password.value === '') {
        console.error('error')
    } else {
        username = user.value;
        sessionStorage.setItem('username', username);
        window.location.href = "index.html";
    }
}