import { Dialog, DialogActions as Action, DialogContent as Content, DialogContentText as Text } from '@material-ui/core'
import styled from 'styled-components'
import { theme } from './../../../global/theme/theme'

import { CheckCircle } from '@material-ui/icons'

interface StyledProps {
  select?: boolean
}

export const Container = styled.div`
  display: flex;
`
export const DialogContainer = styled(Dialog)`
  
`
export const DialogContent = styled(Content)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  align-items: center;
  background-color: ${theme.colors.secondary500};
`
export const DialogActions = styled(Action)`
  display: flex;
  background-color: ${theme.colors.primary};
  padding: 20px;
  justify-content: center;
  font-family: Rajdhani;
  font-weight: 600;
  font-size: 20px;
  color: ${theme.colors.white}
`
export const DialogContentText = styled(Text)``
export const DialogTitle = styled.div`
  display: flex;
  background-color: ${theme.colors.primary};
  padding: 20px;
  justify-content: center;
  font-family: Rajdhani;
  font-weight: 600;
  font-size: 20px;
  color: ${theme.colors.white}
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.secondary100};
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
  background-color: transparent;
  width:300px;
  display: flex;
  flex: 1;
  border: none;
  box-shadow: 0 0 0 0;    
  outline: 0;
  font-size: 14px;
  /* color: ${theme.colors.white}; */
  font-family: Inter;
  ::placeholder {
    /* color: ${theme.colors.white} */
  }
`
export const SimpleTitle = styled.span`
  margin-top: 20px;
  font-family: Rajdhani;
  font-size: 20px;
`
export const UsersContainer = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  padding: 20px;
  overflow: auto;
`
export const UserList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0;
  margin:0;
  align-items: center;
`

export const UserItem = styled.li<StyledProps>`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.secondary400};
  padding-bottom: 5px;
  margin-top: 5px;
  opacity: ${props => props.select ? 0.6 : 1};
  :hover{
    opacity: 0.3;
  }
`
export const UserName = styled.span`
  margin-left: 10px;
  font-family: Rajdhani;
  font-weight: 500;
  font-size: 18px;
`
export const FooterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  padding: 20px;
  :hover {
    opacity: 0.7;
  }
  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
`

export const SaveButton = styled.button`
  padding:10px 25px;
  background-color: red;
  border-radius: 30px;
  background-color: ${theme.colors.secondary100};
  border: 0px;
`

export const CheckIconContainer = styled.span`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`
export const CheckIcon = styled(CheckCircle)`
color: ${theme.colors.secondary100};
`
