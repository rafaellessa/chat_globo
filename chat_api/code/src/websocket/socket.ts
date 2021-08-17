
import { Server } from 'socket.io'
import { http } from '../config/http'
import { Message } from '../entities/Message'
import { MessageService } from '../services/MessageService'
import { RoomService } from '../services/RoomService'
const io = new Server(http)

interface RoomChatProps {
  room: {
    id: string
    name: string
  },
  messages: Message[]
}

io.on('connection', (socket) => {
  const messageService = new MessageService()
  socket.on('chat.sync', async (data:RoomChatProps) => {
    const messages = await messageService.findMessagesWithRoom(data.room.id)
    console.log('Messages BD: ', messages)
    io.emit('chat.sync', messages)
  })

  socket.on('chat.room', async (message) => {
    console.log('chegou messagem', message)
    await messageService.create({
      author_id: message.author.id,
      destination_id: message.author.id,
      room_id: message.room.id,
      text: message.message
    })

    io.emit('chat.room', message)
  })

  socket.on('disconnect', () => {
    console.log('[SOCKET] Disconnect => A connection was disconnected')
  })
})

export { io }
