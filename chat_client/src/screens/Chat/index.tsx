import React, { useState } from 'react'
import Message from './Message'
import Side from './Side'

import { Container, Content } from './styles'

const Chat: React.FC = () => {
  return (
    <Container>
      <Content>
        <Side/>
        <Message/>
      </Content>
    </Container>
  )
}

export default Chat
