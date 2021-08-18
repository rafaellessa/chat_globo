/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react'
import RoomService from '../../../data/services/rooms'
import UserService from '../../../data/services/users'
import { User } from '../../../data/services/users/types'
import { WebSocket } from '../../../services/WebSocket'
import { Socket } from 'socket.io-client'
import {
  Container, DialogContainer,
  DialogContent, DialogTitle, FooterContainer, Input,
  InputContainer,
  SaveButton
} from './styles'
import { getBaseUrl } from '../../../utils/api'

interface DialogProps {
  isOpen: boolean
  onCloseModal: () => void
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onCloseModal }) => {
  const [rommName, setRoomName] = useState('')
  const [socket, setSocket] = useState<Socket | null>(null)
  const instance = new WebSocket()

  useEffect(() => {
    const parsedInstance = instance.connect(getBaseUrl())
    setSocket(parsedInstance)
  }, [])

  const handleCreateRoom = async () => {
    await RoomService.createRoom(rommName)
    onCloseModal()
    setRoomName('')
    socket?.emit('chat.syncRooms', {})
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
          <FooterContainer>
            <SaveButton onClick={handleCreateRoom}>Salvar</SaveButton>
          </FooterContainer>
        </DialogContent>
      </DialogContainer>
    </Container>
  )
}

export default Dialog
