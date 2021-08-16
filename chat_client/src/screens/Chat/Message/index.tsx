import React from 'react'
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

const Message: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderContainer>
          <Avatar avatar={avatar} />
          <HeaderInfo>
            <MessageAuthor>Gilberto</MessageAuthor>
          </HeaderInfo>
          <MenuIcon/>
        </HeaderContainer>
        <MessagesContainer>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={false}>
            <MessageItemContent myMessage={false}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>

          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>
          <MessageItem myMessage={true}>
            <MessageItemContent myMessage={true}>
              <MessageText>Fala ai</MessageText>
              <MessageHour>09:30</MessageHour>
            </MessageItemContent>
          </MessageItem>

        </MessagesContainer>
        <FooterContainer>
          <MessageInputContainer>
            <MessageInput placeholder="Digite uma mensagem"/>
            <SendIcon/>
          </MessageInputContainer>
        </FooterContainer>
      </Content>
    </Container>
  )
}

export default Message
