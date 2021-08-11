import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const endpoint = 'http://localhost:3002/'


function App() {
  
  useEffect(() => {
    const socket = io(endpoint, {transports: ['websocket']})
    socket.on('connection', (data) => console.log("Data: ", data))
    socket.emit('chat.message', {
      id: 1,
      message: 'olá'
    })

    socket.on('chat.message', (data)=> {
      console.log("mensagem do servidor: ", data)
    })
  }, [])
  const [id] = useState(0);

  return (
    <div >
      <h1>Meu código é {id}</h1>
    </div>
  );
}

export default App;
