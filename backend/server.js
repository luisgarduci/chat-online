const {WebSocketServer} = require('ws')

onst port = process.env.PORT || 7680;

const server = new WebSocketServer({
  port: port,
  host: '0.0.0.0', // Garante que o servidor aceita conexões externas
});

//servidor para mandar e receber mensagens
server.on("connection", (ws) => {
ws.on("error", console.error)
//console.log("Client Connected")
ws.on("message", (data) => {
console.log(data.toString())
server.clients.forEach((client) => client.send(data.toString()))
})
})



//verifica os usuários conectados ao servidor

/*const server2 = new WebSocketServer({port: 9092})

server2.on("connection", (ws) => {
ws.on("error", console.error)
ws.on("message", (data) => {
server2.clients.forEach((client) => client.send(data.toString()))
})
})
*/

