import React, { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import { WebSocket } from '../../services/WebSocket'
import Message from './Message'
import Side from './Side'
import { Container, Content } from './styles'

const endpoint = 'http://localhost:3002'

const Chat: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const instance = new WebSocket()

  useEffect(() => {
    const parsedInstance = instance.connect(endpoint)
    setSocket(parsedInstance)
  }, [])

  useEffect(() => {
    if (socket) {
      instance.sendMessage(socket, 'chat.message', 'teste de novo')
      socket.on('chat.message', (data) => {
        console.log('mensagem recebida: ', data)
      })

      socket.emit('chat.message', {
        id: 2,
        message: 'recebido'
      })
    }
  }, [socket])

  return (
    <Container>
      <Content>
        <Side/>
        <Message/>
      </Content>
    </Container>
  )
}

export default Chat
