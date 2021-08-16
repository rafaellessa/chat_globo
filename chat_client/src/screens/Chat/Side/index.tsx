import React, { useContext, useEffect, useState } from 'react'
import Avatar from '../../../components/Avatar'

import { Container, InfoContainer, MessagesContainer, UserInfo, Title, SubTitle, Button, AddIcon, SearchContainer, InputContainer, IconSearchContainer, SearchInput, ArrowIcon, SearchIcon, MessageItem, MessageDetails, MessageAuthor, MessageResume, MessageTime, MessageList, MessageSection, MessageSectionTitle } from './styles'
import { AuthContext } from '../../../context/AuthContext'

import avatar from '../../../assets/avatar.jpg'
import Dialog from '../Dialog'

interface SideProps {
  messages?: []
}

const Side: React.FC<SideProps> = ({ messages }) => {
  const [searchText, setSearchText] = useState('')
  const [searching, setSearching] = useState(false)
  const { user } = useContext(AuthContext)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    if (searchText.length) {
      setSearching(true)
    } else {
      setSearching(false)
    }
  }, [searchText])

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const handleResetSearch = () => {
    setSearchText('')
    setSearching(false)
  }

  const handleToogleDialog = () => {
    setDialogOpen(!dialogOpen)
  }

  return (
    <>
    <Container>
      <UserInfo>
        <Avatar avatar={avatar}/>
        <InfoContainer>
          <Title>{`Olá ${user}`}</Title>
          <SubTitle>Seja bem vindo!</SubTitle>
        </InfoContainer>
        <Button onClick={handleToogleDialog}>
          <AddIcon />
        </Button>
      </UserInfo>
      <SearchContainer>
        <InputContainer>
          <IconSearchContainer onClick={handleResetSearch}>
            {searching ? <ArrowIcon/> : <SearchIcon/>}
          </IconSearchContainer>
          <SearchInput onChange={handleSearch} placeholder="Pesquisar ou começar uma nova conversa"/>
        </InputContainer>
      </SearchContainer>
      <MessagesContainer>
        <MessageSection>
          <MessageSectionTitle>Conversas / Salas</MessageSectionTitle>
        </MessageSection>
        <MessageList>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageSection>
            <MessageSectionTitle>Usuários</MessageSectionTitle>
          </MessageSection>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
          <MessageItem>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>Gilberto</MessageAuthor>
              <MessageResume>fala meu querido</MessageResume>
            </MessageDetails>
            <MessageTime>12:00</MessageTime>
          </MessageItem>
        </MessageList>
      </MessagesContainer>

    </Container>
    <Dialog isOpen={dialogOpen} onCloseModal={handleToogleDialog} />
    </>
  )
}

export default Side
