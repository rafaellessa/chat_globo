
import io, { Socket } from 'socket.io-client'
class WebSocket {
  connect (endpoint: string): Socket {
    return io(endpoint, { transports: ['websocket'] })
  }

  sendMessage (socket: Socket, chanel: string, payload: any) {
    return socket.emit(chanel, payload)
  }
}

export { WebSocket }
