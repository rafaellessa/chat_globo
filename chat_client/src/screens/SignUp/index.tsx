import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { AuthContext } from '../../context/AuthContext'
import { ButtonRegister, ButtonTitle, Container, ContentLeft, ContentRight, Input, InputContainer, LogoContainer, Title, TitleContainer } from './styles'

const SignUp: React.FC = () => {
  const { handleRegister, errorLogin } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSendForm = async () => {
    if (email !== '' && name !== '' && password !== '') {
      const response = await handleRegister({
        name,
        email,
        password
      })

      if (!errorLogin) {
        history.push('/login')
      }
    }
  }

  return (
    <Container>
      <ContentLeft>
        <LogoContainer>
          <img src={logo} alt="" style={{
            width: 400
          }} />
        </LogoContainer>
      </ContentLeft>
      <ContentRight>
        <TitleContainer>
          <Title>Cadastro</Title>
        </TitleContainer>
        <InputContainer>
          <Input placeholder="Nome completo" value={name} onChange={(event) => setName(event.target.value)}/>
          <Input placeholder="E-mail" value={email} onChange={(event) => {
            setEmail(event.target.value)
          }}/>
          <Input placeholder="Senha" type="password" value={password} onChange={(event) => {
            setPassword(event.target.value)
          }}/>
          <Input placeholder="Confirmar senha" type="password" value={password} onChange={(event) => {

          }}/>
        </InputContainer>
        <ButtonRegister onClick={handleSendForm}>
          <ButtonTitle>Registrar</ButtonTitle>
        </ButtonRegister>
      </ContentRight>
    </Container>
  )
}

export default SignUp
