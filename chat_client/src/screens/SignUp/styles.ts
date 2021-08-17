
import styled from 'styled-components'
import background from '../../assets/background.png'
import { theme } from '../../global/theme/theme'

export const Container = styled.div`
  display: flex;
  height: 920px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const ContentLeft = styled.div`
  display: flex;
  flex: 3;
  height: 100%;
  background: url(${background});
  justify-content: center;
  align-items:center;
`

export const LogoContainer = styled.div`
margin-bottom: 40px;
`

export const ContentRight = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: ${theme.colors.secondary300};
  align-content: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const TitleContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 70%;
`

export const Title = styled.span`
  font-family: Rajdhani;
  font-weight: 700;
  font-size: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin-top: 10px;

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
export const ButtonRegister = styled.button`
  display: flex;
  width: 80%;
  background-color: ${theme.colors.secondary200};
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 30px;
  border: 0px;
  
  justify-content: center;
  align-items: center;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`
export const ButtonTitle = styled.span`
  font-family: Inter;
  font-size: 16px;
  color: ${theme.colors.white};
`
