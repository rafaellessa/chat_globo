import React from 'react'
import logo from '../../assets/logo.png'
import { Title } from '../Chat/Side/styles'
import { ButtonLogin, Container, Content, FooterContainer, Input, InputContainer, LogoContainer, SignUpLink } from './styles'

const Login: React.FC = () => {
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
          <Input placeholder="Login"/>
          <Input placeholder="Senha"/>
        </InputContainer>
        <FooterContainer>
          <ButtonLogin>
            Login
          </ButtonLogin>
          <SignUpLink>Não tem uma conta? faça seu cadastro aqui</SignUpLink>
        </FooterContainer>
      </Content>
    </Container>
  )
}

export default Login
