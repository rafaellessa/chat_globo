/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import { Room } from '../../data/services/rooms/types'
import Message from './Message'
import Side from './Side'
import { Container, Content } from './styles'

const Chat: React.FC = () => {
  const [roomSelected, setRoomSelected] = useState<Room>()

  return (
    <Container>
      <Content>
        <Side onSelectRoom={(room) => setRoomSelected(room)}/>
        <Message roomSelected={roomSelected}/>
      </Content>
    </Container>
  )
}

export default Chat
