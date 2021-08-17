import { Room } from './../rooms/types'
import { User } from './../users/types'
export interface IMessage {
  id?: string
  text: string;
  author_id: string;
  destination_id: string
  room_id: string
}

export interface MessageProps {
  message: string
  author: User | null
  room: Room | null
}

export interface MessageApiReturn {
  id: string
  text: string;
  author_id: string;
  destination_id: string
  room_id: string
  created_at: string
}
