const socket = io()
let person;

let messageArea = document.querySelector('.message__area')

//TODO create an window pretty
person = prompt('Entre com seu nome: ')

if (person === "" || person === " ") {
    person = "Guest"
}

let textarea = document.querySelector('#textarea')
textarea.addEventListener('keyup', (e) => {
    //TODO create routine to strip message

    if (e.key === 'Enter') {
        sendMessage(e.target.value)
        e.target.value = ""
    }
})

function sendMessage(msg) {
    let message = {
        user: person,
        message: msg
    }
    appendMessage(message, 'outgoing')
    scrollBottom()

    //TODO server, lembrar de abstrair aqui
    socket.emit('messages', message)

}

function appendMessage(msg, typeMsg) {
    let div = document.createElement('div')
    let className = typeMsg

    div.classList.add(className, 'message')

    div.innerHTML = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `

    messageArea.appendChild(div)
}

// receive
socket.on('messages', (serveMsg) => {
    appendMessage(serveMsg, 'incoming')
    scrollBottom()
})

function scrollBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}