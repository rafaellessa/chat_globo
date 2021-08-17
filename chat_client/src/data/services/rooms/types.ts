import { IMessage } from './../messages/types'
import { User } from './../users/types'
export interface Room {
  id: string;
  name: string;
}

export interface RoomScreenProps {
  destination: User | null
  author: User | null
  messages?: IMessage[]
}
