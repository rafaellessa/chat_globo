import express from 'express'
import { Server, Socket } from 'socket.io'
import { createServer } from 'http'
const app = express()

const http = createServer(app)
const io = new Server(http)

io.on('connection', (socket: Socket) => {
  console.log('Socket conectado', socket.id)

  socket.on('chat.message', (data) => {
    console.log('mensagem recebida: ', data)
  })

  socket.emit('chat.message', {
    id: 2,
    message: 'recebido'
  })
})

app.get('/', (req, res) => {
  res.send({
    hello: 'ok'
  })
})

app.use(express.json)

export { http, io }
