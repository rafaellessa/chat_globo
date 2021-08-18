import { Server } from 'socket.io'
import { http } from '../config/http'
import { Message } from '../entities/Message'
import { Room } from '../entities/Room'
import { MessageService } from '../services/MessageService'
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
  socket.on('chat.sync', async (data:Room) => {
    const messages = await messageService.findMessagesWithRoom(data.id)
    io.emit('chat.sync', messages)
  })

  socket.on('chat.room', async (message) => {
    const msg = await messageService.create({
      author_id: message.author_id,
      room_id: message.room_id,
      text: message.text
    })

    const parsedMessage = await messageService.getMessage(msg.id)

    io.emit('chat.room', parsedMessage)
  })

  socket.on('disconnect', () => {
    console.log('[SOCKET] Disconnect => A connection was disconnected')
  })
})

export { io }
