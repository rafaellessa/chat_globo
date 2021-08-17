/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Socket } from 'socket.io-client'
import avatar from '../../assets/avatar.jpg'
import Avatar from '../../components/Avatar'
import { AuthContext } from '../../context/AuthContext'
import { MessageProps } from '../../data/services/messages/types'
import RoomService from '../../data/services/rooms'
import { Room } from '../../data/services/rooms/types'
import UserService from '../../data/services/users'
import { User } from '../../data/services/users/types'
import { WebSocket } from '../../services/WebSocket'
import { factoryMessagesApi } from './model'
import Side from './Side'
import {
  Container,
  Content, FooterContainer, HeaderContainer,
  HeaderInfo,
  MenuIcon,
  MessageAuthor, MessageContainer,
  MessageContent, MessageHour, MessageInput, MessageInputContainer, MessageItem, MessageItemContent, MessagesContainer, MessageText, SendIcon
} from './styles'

const endpoint = 'http://localhost:3002'

interface RoomChat {
  room: Room | null
  messages?: MessageApi[]
}

export interface MessageApi {
  id: string;
  text: string;
  created_at: string;
  user: User
  room: {
    id: string;
    name: string
  }
}

const Chat: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [users, setUsers] = useState<User[]>()
  const [rooms, setRooms] = useState<Room[]>()
  const [room, setRoom] = useState<RoomChat>({
    room: null,
    messages: []
  })
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [messageChat, setMessageChat] = useState('')
  const instance = new WebSocket()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const parsedInstance = instance.connect(endpoint)
    setSocket(parsedInstance)
    fetchUsers()
    fetchRooms()
  }, [])

  useEffect(() => {
    console.log('sala selecionada', room)
    socket?.on('chat.sync', (data:MessageApi[]) => {
      console.log('mensagens da sala: ', data)
      setRoom({
        room: room.room,
        messages: data
      })
      // setMessages(factoryMessagesApi(data))
    })
  }, [room])

  useEffect(() => {
    console.log('Message Chat: ', messages)
    const handleNewMessage = (newMessage: MessageProps) => setMessages([...messages, newMessage])
    socket?.on('chat.room', handleNewMessage)
    return () => {
      socket?.off('chat.room', handleNewMessage)
    }
  }, [messages])

  const fetchUsers = async () => {
    const response = await UserService.getAllUsers()
    setUsers(response)
  }

  const fetchRooms = async () => {
    const response = await RoomService.getRooms()
    setRooms(response)
  }

  const handleRoomClicked = (room: Room) => {
    setRoom({
      room
    })
    // if (room) {
    //   socket?.emit('chat.sync', {
    //     room
    //   })
    // }
  }

  const handleSendMessage = (msg: MessageProps) => {
    setMessageChat('')
    console.log('Mes: ', msg)
    socket?.emit('chat.room', msg)

    socket?.on('chat.room', (data) => {
      console.log('Mensagem do chat: ', data)
      setMessages([...messages, data])
    })
  }

  const memoList = useMemo(() => {
    return (
      <MessagesContainer>
        {messages?.map((message, index) => (
          <MessageItem myMessage={user?.id === message.author?.id} key={index}>
            <MessageItemContent myMessage={user?.id === message.author?.id}>
              <MessageText>{message.message}</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
        ))}

      </MessagesContainer>
    )
  }, [messages])

  return (
    <Container>
      <Content>
        <Side users={users} onUserClicked={() => {}} onRoomClicked={handleRoomClicked} rooms={rooms}/>
        {/* <Message messages={messages} room={room} onHandleSendMessages={(msg) => handleSendMessage(msg)}/> */}
        <MessageContainer>
          <MessageContent>
          <HeaderContainer>
        <Avatar avatar={avatar} />
        <HeaderInfo>
          <MessageAuthor>{room.room?.name}</MessageAuthor>
        </HeaderInfo>
        <MenuIcon/>
      </HeaderContainer>
      {memoList}
      <FooterContainer>
        <MessageInputContainer>
          <MessageInput onChange={(event) => setMessageChat(event.target.value)} value={messageChat} placeholder="Digite uma mensagem"/>
          <SendIcon onClick={() => handleSendMessage({
            author: user,
            message: messageChat,
            room: room.room
          })}/>
        </MessageInputContainer>
      </FooterContainer>
      </MessageContent>
      </MessageContainer>
      </Content>
    </Container>
  )
}

export default Chat
