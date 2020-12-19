const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const port = process.env.PORT || 4000;

io.on('connection', socket => {
    console.log('Connected', socket.id)

    socket.emit('message', 'Hello client!');
})

server.listen(port, () => {
    console.log(`listening on port : ${port}`)
})
