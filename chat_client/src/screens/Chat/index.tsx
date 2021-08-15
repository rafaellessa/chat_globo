import React, { useContext } from 'react'
import Avatar from '../../components/Avatar'
import './style.css'
import { AuthContext } from '../../context/AuthContext'
import { Add } from '@material-ui/icons'

import avatar from '../../assets/avatar.jpg'

const Chat: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='container'>
      <div className="sidebar">
        <div className="user-info">
          <Avatar avatar={avatar}/>
          <span className='info'>
            <span className='title'>{`Olá ${user}`}</span>
            <span className='subtitle'>Seja bem vindo!</span>
          </span>
          <button onClick={() => console.log('ajsakljsalk')} className='btn'>
          <Add style={{ color: '#fff' }} />
          </button>
        </div>
      </div>
      <div className="message-box"></div>
    </div>
  )
}

export default Chat
