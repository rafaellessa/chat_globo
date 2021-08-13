
import express from 'express'
import { createServer } from 'http'
import { routes } from '../routes'
import '../database'
import { Server, Socket } from 'socket.io'
const app = express()

app.use(express.json())
app.use(routes)

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


export { http, io }