let inputElement = document.querySelector('.text')
let profilePicure = 'profile'
const username = sessionStorage.getItem('username');

if (username === null) {
    window.location.href = "login-page.html";
} else {



    console.log(username);
    function getMessageInput(event) {
        if (event.key === 'Enter') {
            if (inputElement.value !== '') {
                const messageDiv = document.createElement('div')
                const userDiv = document.createElement('div')
                messageDiv.classList.add('message')
                userDiv.classList.add('username')
                messageDiv.innerText = inputElement.value
                userDiv.innerText = username
                document.querySelector('.js-chat').appendChild(userDiv)
                document.querySelector('.js-chat').appendChild(messageDiv)


                inputElement.value = ''
            }

        }

    }

    function isUserTyping(event) {
        if (event.key) {
            document.querySelector('.js-typing').innerHTML = `${username} is typing...`
            if (event.key === 'Enter') {
                document.querySelector('.js-typing').innerHTML = ''
            }
            if (inputElement.value === '') {
                document.querySelector('.js-typing').innerHTML = ''
            }
            if (event.key === 'Backspace') {
                document.querySelector('.js-typing').innerHTML = ''
            }
        }
    }

    let numberTopics = 0 // only in console
    const topicName = document.querySelector('.topic-name')
    const popUp = document.querySelector('.name-topic')

    function showPopUp() {
        popUp.classList.add('show')
        document.querySelector('body').classList.add('pointer')
    }

    function closePopUp() {
        popUp.classList.remove('show')
        document.querySelector('body').classList.remove('pointer')
        document.querySelector('.error1').classList.remove('showerror')
    }

    function createTopic() {


        const topicTypedName = document.querySelector('.topic-create-input')

        const topicsContainer = document.querySelector('.topics-container')

        const newTopic = document.createElement('div')

        const textInput = document.querySelector('.text')

        let topicID = topicTypedName.value.trim()
        if (topicID === '') {
            console.error('cannot create topics error code : 1')
            document.querySelector('.error1').classList.add('showerror')
        } else {
            newTopic.classList.add('topics')
            newTopic.innerHTML = `${topicID} <img src="index/pictures/484662.png" class="delete-topic-icon" onclick="deleteTopic(this)">`
            document.querySelector('.topics-container').appendChild(newTopic)
            numberTopics += 1
            console.log(numberTopics)
            topicTypedName.value = ''
            popUp.classList.remove('show')
            document.querySelector('body').classList.remove('pointer')
            document.querySelector('.error1').classList.remove('showerror')
            newTopic.onclick = function () {
                if (newTopic.classList.contains('topics-selected')) {
                    newTopic.classList.remove('topics-selected')
                    topicName.innerHTML = ''
                } else {
                    newTopic.classList.add('topics-selected')
                    topicName.innerText = topicID
                }

            }

        }
    }


    function deleteTopic(imgElement) {
        numberTopics -= 1
        console.log(numberTopics)
        imgElement.parentElement.remove();
        topicName.innerHTML = ''
        event.stopPropagation();
    }




    document.querySelector('.profile-container').innerHTML = `<img src="index/pictures/${profilePicure}.png" class="profile-picture">`

}