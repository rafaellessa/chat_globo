/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import avatar from '../../../assets/avatar.jpg'
import Avatar from '../../../components/Avatar'
import { AuthContext } from '../../../context/AuthContext'
import { Room } from '../../../data/services/rooms/types'
import { User } from '../../../data/services/users/types'
import { WebSocket } from '../../../services/WebSocket'
import {
  Container,
  Content, FooterContainer, HeaderContainer,
  HeaderInfo,
  MenuIcon,
  MessageAuthor, MessageHour, MessageInput, MessageInputContainer, MessageItem, MessageItemContent, MessagesContainer, MessageText, SendIcon
} from './styles'

export interface MessageProps {
  id?: string;
  text: string;
  created_at?: string;
  user: User | null
  room: {
    id: string | undefined;
    name: string | undefined
  }
}

const endpoint = 'http://localhost:3002'

interface MessageScreenProps {
  roomSelected: Room | undefined
}

const Message: React.FC<MessageScreenProps> = ({ roomSelected }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [socket, setSocket] = useState<Socket | null>(null)
  const instance = new WebSocket()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const parsedInstance = instance.connect(endpoint)
    setSocket(parsedInstance)
  }, [])

  useEffect(() => {
    console.log('Sala selecionada no componente: ', roomSelected)
    handleMessagesWithRoomSelected()
    if (roomSelected) {
      socket?.on('chat.sync', (data: MessageProps[]) => {
        setMessages(data)
      })
    }
  }, [roomSelected])

  useEffect(() => {
    console.log('mensagens aqui:> ', messages)
    const handleNewMessage = (newMessage) =>
      setMessages([...messages, {
        room: {
          id: roomSelected?.id,
          name: roomSelected?.name
        },
        text: newMessage.text,
        user: newMessage.author_id
      }])
    socket?.on('chat.room', handleNewMessage)
    return () => { socket?.off('chat.message', handleNewMessage) }
  }, [messages])

  const handleSave = (msg:string) => {
    // setMessages([...messages, { room: roomSelected!, user, text: msg }])
    socket?.emit('chat.room', {
      author_id: user?.id,
      room_id: roomSelected?.id,
      text: msg
    })
  }

  const handleMessagesWithRoomSelected = () => {
    socket?.emit('chat.sync', roomSelected)
  }

  const renderMessages = () => (
    <Container>
    <Content>
      <HeaderContainer>
        <Avatar avatar={avatar} />
        <HeaderInfo>
          <MessageAuthor>{roomSelected?.name}</MessageAuthor>
        </HeaderInfo>
        <MenuIcon/>
      </HeaderContainer>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <MessageItem myMessage={msg.user?.id === user?.id} key={index}>
          <MessageItemContent myMessage={msg.user?.id === user?.id}>
            <MessageText>{msg.text}</MessageText>
            <MessageHour>09:30</MessageHour>
          </MessageItemContent>
        </MessageItem>
        ))}

      </MessagesContainer>
      <FooterContainer>
        <MessageInputContainer>
          <MessageInput value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Digite uma mensagem"/>
          <SendIcon onClick={() => handleSave(message)}/>
        </MessageInputContainer>
      </FooterContainer>
    </Content>
  </Container>
  )

  const validateRender = () => {
    if (roomSelected) {
      return renderMessages()
    } else {
      return <Container/>
    }
  }

  return validateRender()
}

export default Message
