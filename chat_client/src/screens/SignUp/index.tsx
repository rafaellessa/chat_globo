import React from 'react'

import { ButtonRegister, ButtonTitle, Container, ContentLeft, ContentRight, Input, InputContainer, LogoContainer, Title, TitleContainer } from './styles'

import logo from '../../assets/logo.png'

const SignUp: React.FC = () => {
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
          <Input placeholder="Nome completo"/>
          <Input placeholder="E-mail"/>
          <Input placeholder="Senha" type="password"/>
          <Input placeholder="Confirmar senha" type="password"/>
        </InputContainer>
        <ButtonRegister>
          <ButtonTitle>Registrar</ButtonTitle>
        </ButtonRegister>
      </ContentRight>
    </Container>
  )
}

export default SignUp
