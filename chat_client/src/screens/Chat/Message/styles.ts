import { theme } from './../../../global/theme/theme'
import styled from 'styled-components'
import { MenuOpen, Send } from '@material-ui/icons'

interface ThemedStyledProps {
  myMessage: boolean
}

export const Container = styled.div`
  display: flex;
  flex: 3;
  background-color: ${theme.colors.secondary500};
  flex-direction: column;
  padding: 30px;
  justify-content: center;
`
export const Content = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${theme.colors.white};
  flex-direction: column;
  border-radius: 10px;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.secondary100};
  padding: 10px;
  align-items: center;
  border-radius: 10px;
`

export const HeaderInfo = styled.span`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const MessageAuthor = styled.span`
  font-family: Rajdhani;
  font-weight: 600;
  font-size: 18px;
`
export const MenuIcon = styled(MenuOpen)`
  color: ${theme.colors.white};
`
export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  overflow: auto;  
`
export const MessageContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const MessageItem = styled.li<ThemedStyledProps>`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: ${props => props.myMessage ? 'flex-end' : 'flex-start'}
`

export const MessageItemContent = styled.span<ThemedStyledProps>`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: ${props => props.myMessage ? theme.colors.secondary200 : theme.colors.secondary300};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const MessageInputContainer = styled.span`
  display: flex;
  flex: 1;
  background-color:#fff;
  padding: 10px 20px;
  border-radius: 20px;
`
export const MessageInput = styled.input`
  display: flex;
  flex: 1;
  border: none;
  box-shadow: 0 0 0 0;    
  outline: 0;
`

export const SendIcon = styled(Send)`
  color: ${theme.colors.secondary700};
`

export const FooterContainer = styled.div`
  padding: 30px 50px;
  background-color: ${theme.colors.secondary100}
`

export const MessageText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
`
export const MessageHour = styled.span`
font-family: Inter;
  font-weight: 400;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 20px;
  color: ${theme.colors.secondary700};
`
