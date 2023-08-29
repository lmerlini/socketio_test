const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.envPORT || 3000

http.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`);
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


//SOCKETS

const io = require('socket.io')(http)

io.on('connection', (sk) => {
    console.log('Socket conected');
    sk.on('messages', (msg) => {
        sk.broadcast.emit('messages', msg)
    })
})



// testes
//async function conecction() {
//     const database = require('./database/db')
//     const Group = require('./database/model/group')

//     try {
//         const resultado = await database.sync();
//         const resultadoCreate = await Group.create({
//             name: 'fofocas',
//             active: true
//         })
//         console.log(resultadoCreate);

//     } catch (error) {
//         console.log(error);
//     }
// }

// conecction()