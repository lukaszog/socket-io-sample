const io = require("socket.io-client");
const socket = io.connect("http://localhost:4000");

socket.on("message", msg => {
    console.info(msg)
});