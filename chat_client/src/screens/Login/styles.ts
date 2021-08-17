import { theme } from './../../global/theme/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`
export const LogoContainer = styled.div`
margin-bottom: 40px;
`

export const Content = styled.div`
  display: flex;
  width: 400px;
  height: 250px;
  background-color: ${theme.colors.secondary500};
  border-radius: 30px;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`
export const Title = styled.span``

export const InputContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin-top: 20px;
`
export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px 25px;
  border-radius: 20px;

  border: none;
  box-shadow: 0 0 0 0;    
  outline: 0;
  font-size: 14px;
  font-family: Inter;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonLogin = styled.button`
  background-color: ${theme.colors.secondary100};
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 30px;
  border: 0px;
  font-family: Inter;
  font-size: 16px;

  :hover {
    opacity: 0.3;
    cursor: pointer;
  }
`
export const SignUpLink = styled.a`
  font-family: Rajdhani;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
