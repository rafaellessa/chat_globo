/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Socket } from 'socket.io-client'
import avatar from '../../../assets/avatar.jpg'
import Avatar from '../../../components/Avatar'
import { AuthContext } from '../../../context/AuthContext'
import { Room } from '../../../data/services/rooms/types'
import { User } from '../../../data/services/users/types'
import { WebSocket } from '../../../services/WebSocket'
import { createDate } from '../../../utils/date'
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
  author_id?: string
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
    handleMessagesWithRoomSelected()
    if (roomSelected) {
      socket?.on('chat.sync', (data: MessageProps[]) => {
        setMessages(handleSortMessages(data))
      })
    }
  }, [roomSelected])

  useEffect(() => {
    socket?.on('chat.room', (data) => {
      handleMessages(data)
    })
    return () => {
      socket?.off()
    }
  }, [messages])

  const handleSave = (msg:string) => {
    if (msg !== '') {
      socket?.emit('chat.room', {
        author_id: user?.id,
        room_id: roomSelected?.id,
        text: msg
      })

      setMessage('')
    }
  }

  const handleMessages = (data: MessageProps[]) => {
    setMessages([...messages, data[0]])
  }

  const handleSortMessages = (data: MessageProps[]):MessageProps[] => {
    const parsedSort = data.sort((a, b) => {
      if (a.created_at! > b.created_at!) {
        return 1
      }
      if (a.created_at! < b.created_at!) {
        return -1
      }
      return 0
    })

    return parsedSort
  }

  const handleMessagesWithRoomSelected = () => {
    socket?.emit('chat.sync', roomSelected)
  }

  const listMemo = useMemo(() => {
    return (
      messages.map((msg, index) => {
        if (msg.room.id === roomSelected?.id) {
          return (
            <MessageItem myMessage={msg.user?.id === user?.id} key={index}>
              <MessageItemContent myMessage={msg.user?.id === user?.id}>
                <MessageText>{msg.text}</MessageText>
                <MessageHour>{createDate(String(msg.created_at))}</MessageHour>
              </MessageItemContent>
            </MessageItem>
          )
        }
      })
    )
  }, [messages])

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
        {listMemo}
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
