import io from 'socket.io-client'

class WebSocket {
  connect (endpoint: string) {
    return io(endpoint, { transports: ['websocket'] })
  }
}

export { WebSocket }
