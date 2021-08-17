/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import avatar from '../../../assets/avatar.jpg'
import Avatar from '../../../components/Avatar'
import { AuthContext } from '../../../context/AuthContext'
import { IMessage } from '../../../data/services/messages/types'
import { Room } from '../../../data/services/rooms/types'
import { User } from '../../../data/services/users/types'
import Dialog from '../Dialog'
import { AddIcon, ArrowIcon, Button, Container, IconSearchContainer, InfoContainer, InputContainer, MessageAuthor, MessageDetails, MessageItem, MessageList, MessageResume, MessagesContainer, MessageSection, MessageSectionTitle, MessageTime, SearchContainer, SearchIcon, SearchInput, SubTitle, Title, UserInfo } from './styles'

interface SideProps {
  onRoomClicked: (room: Room) => void
  onUserClicked: (user: User) => void
  messages?: IMessage[]
  rooms?: Room[]
  users: User[] | undefined
}

const Side: React.FC<SideProps> = ({ messages, users, onRoomClicked, onUserClicked, rooms }) => {
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

  const memoList = useMemo(() => {
    return (
      <MessageList>
          {rooms?.map((room) => (
            <MessageItem key={room.id} onClick={() => onRoomClicked(room)}>
              <Avatar avatar={avatar}/>
              <MessageDetails>
                <MessageAuthor>{room.name}</MessageAuthor>
                <MessageResume>fala meu querido</MessageResume>
              </MessageDetails>
              <MessageTime>12:00</MessageTime>
            </MessageItem>
          ))}

          <MessageSection>
            <MessageSectionTitle>Usuários</MessageSectionTitle>
          </MessageSection>
            {users?.map((item) => {
              if (user?.id !== item.id) {
                return (
                  <MessageItem key={item.id} onClick={() => onUserClicked(item)}>
                    <Avatar avatar={avatar}/>
                    <MessageDetails>
                      <MessageAuthor>{item.name}</MessageAuthor>
                    </MessageDetails>
                  </MessageItem>
                )
              }
            })}
        </MessageList>
    )
  }, [rooms])

  return (
    <>
    <Container>
      <UserInfo>
        <Avatar avatar={avatar}/>
        <InfoContainer>
          <Title>{`Olá ${user?.name}`}</Title>
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
        {memoList}
      </MessagesContainer>

    </Container>
    <Dialog isOpen={dialogOpen} onCloseModal={handleToogleDialog} />
    </>
  )
}

export default Side
