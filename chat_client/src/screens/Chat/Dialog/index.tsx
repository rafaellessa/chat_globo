/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react'
import avatar from '../../../assets/avatar.jpg'
import Avatar from '../../../components/Avatar'
import RoomService from '../../../data/services/rooms'
import UserService from '../../../data/services/users'
import { User } from '../../../data/services/users/types'

import {
  Container,
  DialogActions,
  DialogContainer,
  DialogContent, DialogTitle,
  Input,
  InputContainer,
  SaveButton,
  SimpleTitle,
  UserItem,
  UserList,
  UserName,
  UsersContainer,
  FooterContainer,
  CheckIcon,
  CheckIconContainer
} from './styles'

interface DialogProps {
  isOpen: boolean
  onCloseModal: () => void
}
const Dialog: React.FC<DialogProps> = ({ isOpen, onCloseModal }) => {
  const [users, setUsers] = useState<User[] | null>(null)
  const [userSelected, setUserSelected] = useState('')
  const [rommName, setRoomName] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await UserService.getAllUsers()
    setUsers(response)
  }

  const handleCreateRoom = async () => {
    const response = await RoomService.createRoom(rommName)
    onCloseModal()
  }

  return (
    <Container>
      <DialogContainer open={isOpen} onClose={onCloseModal}>
        <DialogTitle>
          Criar uma nova sala
        </DialogTitle>
        <DialogContent>
          <InputContainer>
            <Input value={rommName} onChange={(event) => setRoomName(event.target.value) } placeholder="Digite um nome para a nova sala" />
          </InputContainer>
          <SimpleTitle>Escolha um usuário</SimpleTitle>
          <UsersContainer>
            <UserList>
              {users?.map((user) => (
                <UserItem select={true} key={user.id} onClick={() => setUserSelected(user.id)}>
                  <Avatar avatar={avatar} />
                  <UserName>{user.name}</UserName>
                  {userSelected === user.id && (
                    <CheckIconContainer>
                      <CheckIcon/>
                    </CheckIconContainer>
                  )}
                </UserItem>
              ))}
            </UserList>
          </UsersContainer>
          <FooterContainer>
            <SaveButton onClick={handleCreateRoom}>Salvar</SaveButton>
          </FooterContainer>
        </DialogContent>
      </DialogContainer>
    </Container>
  )
}

export default Dialog
