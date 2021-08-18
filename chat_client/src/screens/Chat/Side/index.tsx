/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, useState } from 'react'
import Avatar from '../../../components/Avatar'

import { Container, InfoContainer, MessagesContainer, UserInfo, Title, SubTitle, Button, AddIcon, SearchContainer, InputContainer, IconSearchContainer, SearchInput, ArrowIcon, SearchIcon, MessageItem, MessageDetails, MessageAuthor, MessageResume, MessageTime, MessageList, MessageSection, MessageSectionTitle } from './styles'
import { AuthContext } from '../../../context/AuthContext'

import avatar from '../../../assets/avatar.png'
import Dialog from '../Dialog'
import { User } from '../../../data/services/users/types'
import UserService from '../../../data/services/users'
import { Room } from '../../../data/services/rooms/types'
import RoomService from '../../../data/services/rooms'
import { WebSocket } from '../../../services/WebSocket'
import { Socket } from 'socket.io-client'
import { getBaseUrl } from '../../../utils/api'
import { Link } from 'react-router-dom'
import { theme } from '../../../global/theme/theme'

interface SideProps {
  onSelectRoom: (room: Room) => void
}

const Side: React.FC<SideProps> = ({ onSelectRoom }) => {
  const [searchText, setSearchText] = useState('')
  const [searching, setSearching] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [users, setUsers] = useState<User[]>()
  const [rooms, setRooms] = useState<Room[]>()
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([])
  const [socket, setSocket] = useState<Socket | null>(null)
  const { user } = useContext(AuthContext)
  const instance = new WebSocket()

  useEffect(() => {
    socket?.on('chat.rooms', (data) => {
      setRooms(data)
    })

    return () => {
      socket?.off()
    }
  }, [rooms])

  useEffect(() => {
    const parsedInstance = instance.connect(getBaseUrl())
    setSocket(parsedInstance)
    fetchUsers()
    fetchRooms()
  }, [])

  useEffect(() => {
    if (searchText.length) {
      setSearching(true)
      handleSearchRooms()
    } else {
      setSearching(false)
    }
  }, [searchText])

  async function fetchUsers () {
    const response = await UserService.getAllUsers()
    setUsers(response)
  }

  async function fetchRooms () {
    const response = await RoomService.getRooms()
    setRooms(response)
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const handleResetSearch = () => {
    setSearchText('')
    setSearching(false)
  }

  const handleToogleDialog = () => {
    setDialogOpen(!dialogOpen)
    fetchRooms()
  }

  const handleSearchRooms = () => {
    const filtered = rooms?.filter((room) => room.name === searchText)
    setFilteredRooms(filtered!)
  }

  return (
    <>
    <Container>
      <UserInfo>
        <Avatar avatar={avatar}/>
        <InfoContainer>
          <Title>{`Olá ${user?.name}`}</Title>
          <SubTitle>Seja bem vindo!</SubTitle>
          <Link style={{ fontFamily: 'Inter', color: theme.colors.white, fontSize: 12 }} to='/login'>Sair</Link>
        </InfoContainer>
        <Button onClick={handleToogleDialog}>
          <AddIcon />
        </Button>
      </UserInfo>
      <MessagesContainer>
        <MessageSection>
          <MessageSectionTitle>Conversas / Salas</MessageSectionTitle>
        </MessageSection>
        <MessageList>
          {rooms?.map((item) => (
            <MessageItem key={item.id} onClick={() => onSelectRoom(item)}>
            <Avatar avatar={avatar}/>
            <MessageDetails>
              <MessageAuthor>{item.name}</MessageAuthor>
            </MessageDetails>
          </MessageItem>
          ))}
        </MessageList>
      </MessagesContainer>

    </Container>
    <Dialog isOpen={dialogOpen} onCloseModal={handleToogleDialog} />
    </>
  )
}

export default Side
