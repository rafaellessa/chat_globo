import { Room } from '../entities/Room'
import { io } from '../config/http'
import { Socket } from 'socket.io'
class SocketService {
  async syncronizeRooms (rooms: Room[]) {
    io.on('connection', (socket: Socket) => {
      console.log('Socket conectado', socket.id)

      rooms.forEach((room) => {
        socket.on(`Chat.${room.id}`, (data) => {
          console.log('mensagem recebida: ', data)
        })
      })

      socket.emit('chat.message', {
        id: 2,
        message: 'recebido'
      })
    })
  }
}

export { SocketService }
