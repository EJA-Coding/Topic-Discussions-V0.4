const email = document.querySelector('.user-input')
const firstPassword = document.querySelector('.password-input')
const confirmPassword = document.querySelector('.confirm-password-input')
let userPassword;
let userEmail;
let userNumber = 0

function canCreateAccount() {
    if (email.value === '' || firstPassword.value === '' || confirmPassword.value === '') {
        console.log('not everything was entered')
    } else {
        if (firstPassword.value === confirmPassword.value) {
            console.log('password is the same')
            storeUser()
        } else {
            console.log('password is not the same')
        }
    }

}

function storeUser() {
    const user = {
        password: firstPassword.value,
        email: email.value
    }

    localStorage.setItem(`user${userNumber}`, JSON.stringify(user))

    userNumber++
    console.log('User stored:', user.email)
    alert('Compte créé avec succès !')
}