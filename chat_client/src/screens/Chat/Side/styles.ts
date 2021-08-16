import { theme } from './../../../global/theme/theme'
import styled from 'styled-components'
import { Add, Search, ArrowBack, MenuOpen, Send } from '@material-ui/icons'

export const Container = styled.div`
  display: flex;
  background-color: ${theme.colors.primary};
  flex: 1;
  padding: 20px;
  flex-direction: column;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
`
export const InfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.white};
  line-height: 24px;
`
export const Title = styled.span`
  font-family: Rajdhani;
  font-weight: 500;
  font-size: 26px;
`
export const SubTitle = styled.span`
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
`
export const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background-color: ${theme.colors.secondary100};
  border: 0px;
`
export const AddIcon = styled(Add)`
  color: ${theme.colors.white};
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  align-items: center;
`
export const InputContainer = styled.span`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.secondary100};
  padding: 10px;
  border-radius: 20px;
`
export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  background-color: transparent;
  border: none;
  box-shadow: 0 0 0 0;    
  outline: 0;
  color: ${theme.colors.white};
  font-family: Inter;
  font-size: 13px;

  ::placeholder {
    color: ${theme.colors.white};
  }
`

export const IconSearchContainer = styled.span`
justify-content: center;
align-items: center;
`

export const ArrowIcon = styled(ArrowBack)`
color: ${theme.colors.white};
`
export const SearchIcon = styled(Search)`
color: ${theme.colors.white};
`
export const MessagesContainer = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px;
  background-color: #ECE5DD;
  border-radius: 10px; 
  overflow: auto;
`

export const MessageItem = styled.li`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #DDD3D3;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px
`
export const MessageDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 10px;
  padding-left: 10px;
`

export const MessageAuthor = styled.span`
  font-family: Rajdhani;
  font-weight: 600;
  font-size: 18px;
`
export const MessageResume = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  color: ${theme.colors.secondary600}
`
export const MessageTime = styled.span`
  font-family: Rajdhani;
  font-weight: 400;
  font-size: 12px;
`
