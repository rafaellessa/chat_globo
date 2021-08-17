import React, { useContext, useState, useEffect } from 'react'
import Avatar from '../../../components/Avatar'

import {
  Container,
  Content,
  HeaderContainer,
  HeaderInfo,
  MenuIcon,
  MessageAuthor,
  FooterContainer,
  MessageInputContainer,
  MessagesContainer,
  MessageItem,
  MessageText,
  MessageHour,
  MessageItemContent,
  SendIcon,
  MessageInput
} from './styles'

import avatar from '../../../assets/avatar.jpg'
import { IMessage, MessageProps } from '../../../data/services/messages/types'
import { Room, RoomScreenProps } from '../../../data/services/rooms/types'
import { AuthContext } from '../../../context/AuthContext'
import { User } from '../../../data/services/users/types'

interface MessageScreenProps {
  messages: MessageProps[] | undefined
  room: Room | null
  onHandleSendMessages: (message:MessageProps) => void
}

const Message: React.FC<MessageScreenProps> = ({ messages, room, onHandleSendMessages }) => {
  const { user } = useContext(AuthContext)
  const [messageChat, setMessageChat] = useState('')

  // useEffect(() => {
  //   const handleNewMessage = newMessage =>
  //     updateMessages([...messages, newMessage])
  //   socket.on('chat.message', handleNewMessage)
  //   return () => socket.off('chat.message', handleNewMessage)
  // }, [messages])

  const renderMessages = () => (
    <Content>
      <HeaderContainer>
        <Avatar avatar={avatar} />
        <HeaderInfo>
          <MessageAuthor>{room?.name}</MessageAuthor>
        </HeaderInfo>
        <MenuIcon/>
      </HeaderContainer>
      <MessagesContainer>
        {messages?.map((message, index) => (
          <MessageItem myMessage={user?.id === message.author?.id} key={index}>
            <MessageItemContent myMessage={true}>
              <MessageText>{message.message}</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
        ))}

      </MessagesContainer>
      <FooterContainer>
        <MessageInputContainer>
          <MessageInput onChange={(event) => setMessageChat(event.target.value)} value={messageChat} placeholder="Digite uma mensagem"/>
          <SendIcon onClick={() => onHandleSendMessages({
            author: user,
            message: messageChat,
            room: room
          })}/>
        </MessageInputContainer>
      </FooterContainer>
    </Content>
  )

  const renderEmptyContainer = () => (
    <Container/>
  )
  return (
    <Container>
      {room ? renderMessages() : renderEmptyContainer()}
    </Container>
  )
}

export default Message
