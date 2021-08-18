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
    console.log('Messages BD: ', messages)
    io.emit('chat.sync', messages)
  })

  // author_id: message.author.id,
  //     room_id: message.room.id,
  //     text: message.message

  socket.on('chat.room', async (message) => {
    console.log('chegou messagem', message)
    await messageService.create({
      author_id: message.author_id,
      room_id: message.room_id,
      text: message.text
    })

    io.emit('chat.room', message)
  })

  socket.on('disconnect', () => {
    console.log('[SOCKET] Disconnect => A connection was disconnected')
  })
})

export { io }
