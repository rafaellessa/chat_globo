import React, { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { AuthContext } from '../../context/AuthContext'
import { Title } from '../Chat/Side/styles'
import {
  ButtonLogin,
  Container,
  Content,
  FooterContainer,
  Input,
  InputContainer,
  LogoContainer,
  SignUpLink
} from './styles'

const Login: React.FC = () => {
  const { handleLogin, errorLogin, user } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const location = useLocation()
  const { from } = { from: { pathname: '/' } }

  const handleLoginService = async () => {
    const response = await handleLogin(email, password)
    history.replace(from)
    history.push('/chat')
    console.log('User no login', user)
    // if (response.data.user) {
    // }
  }

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="" style={{
          width: 250
        }} />
      </LogoContainer>
      <Content>
        <Title>Login</Title>
        <InputContainer>
          <Input placeholder="E-mail" value={email} onChange={(event) => {
            setEmail(event.target.value)
          }}/>
          <Input placeholder="Senha" type="password" value={password} onChange={(event) => {
            setPassword(event.target.value)
          }}/>
        </InputContainer>
        <FooterContainer>
          <ButtonLogin onClick={handleLoginService}>
            Login
          </ButtonLogin>
          <SignUpLink onClick={() => history.push('/register')}>Não tem uma conta? faça seu cadastro aqui</SignUpLink>
        </FooterContainer>
      </Content>
    </Container>
  )
}

export default Login
