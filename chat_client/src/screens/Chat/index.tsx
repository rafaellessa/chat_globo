import React, { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import UserService from '../../data/services/users'
import { User } from '../../data/services/users/types'
import { WebSocket } from '../../services/WebSocket'
import Message from './Message'
import Side from './Side'
import { Container, Content } from './styles'

const endpoint = 'http://localhost:3002'

const Chat: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [users, setUsers] = useState<User[]>()
  const instance = new WebSocket()

  useEffect(() => {
    const parsedInstance = instance.connect(endpoint)
    setSocket(parsedInstance)
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    fetchUsers()
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

  async function fetchUsers () {
    const response = await UserService.getAllUsers()
    console.log('Users: ', response)
    setUsers(response)
  }

  return (
    <Container>
      <Content>
        <Side users={users}/>
        <Message/>
      </Content>
    </Container>
  )
}

export default Chat
