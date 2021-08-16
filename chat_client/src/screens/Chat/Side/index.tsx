import React, { useContext, useEffect, useState } from 'react'
import Avatar from '../../../components/Avatar'

import { Container, InfoContainer, MessagesContainer, UserInfo, Title, SubTitle, Button, AddIcon, SearchContainer, InputContainer, IconSearchContainer, SearchInput, ArrowIcon, SearchIcon, MessageItem, MessageDetails, MessageAuthor, MessageResume, MessageTime } from './styles'
import { AuthContext } from '../../../context/AuthContext'

import avatar from '../../../assets/avatar.jpg'

interface SideProps {
  messages?: []
}

const Side: React.FC<SideProps> = ({ messages }) => {
  const [searchText, setSearchText] = useState('')
  const [searching, setSearching] = useState(false)
  const { user } = useContext(AuthContext)

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

  return (
    <Container>
      <UserInfo>
        <Avatar avatar={avatar}/>
        <InfoContainer>
          <Title>{`Olá ${user}`}</Title>
          <SubTitle>Seja bem vindo!</SubTitle>
        </InfoContainer>
        <Button>
          <AddIcon/>
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

      </MessagesContainer>
    </Container>
  )
}

export default Side
