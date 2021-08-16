import React from 'react'
import avatar from '../../../assets/avatar.jpg'
import Avatar from '../../../components/Avatar'

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
  return (
    <Container>
      <DialogContainer open={isOpen} onClose={onCloseModal}>
        <DialogTitle>
          Criar uma nova sala
        </DialogTitle>
        <DialogContent>
          <InputContainer>
            <Input placeholder="Digite um nome para a nova sala" />
          </InputContainer>
          <SimpleTitle>Escolha um usuário</SimpleTitle>
          <UsersContainer>
            <UserList>
              <UserItem select={true}>
                <Avatar avatar={avatar} />
                <UserName>Gilberto</UserName>
                <CheckIconContainer>
                  <CheckIcon/>
                </CheckIconContainer>
              </UserItem>
              <UserItem>
                <Avatar avatar={avatar} />
                <UserName>Gilberto</UserName>
              </UserItem>
              <UserItem>
                <Avatar avatar={avatar} />
                <UserName>Gilberto</UserName>
              </UserItem>
              <UserItem>
                <Avatar avatar={avatar} />
                <UserName>Gilberto</UserName>
              </UserItem>
              <UserItem>
                <Avatar avatar={avatar} />
                <UserName>Gilberto</UserName>
              </UserItem>
              <UserItem>
                <Avatar avatar={avatar} />
                <UserName>Gilberto</UserName>
              </UserItem>
            </UserList>
          </UsersContainer>
          <FooterContainer>
            <SaveButton>Salvar</SaveButton>
          </FooterContainer>
        </DialogContent>
      </DialogContainer>
    </Container>
  )
}

export default Dialog
