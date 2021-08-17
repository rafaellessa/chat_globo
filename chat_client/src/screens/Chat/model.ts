import { MessageApi } from '.'
import { MessageProps } from '../../data/services/messages/types'

export const factoryMessagesApi = (data: MessageApi[]): MessageProps[] => {
  return data.map((item) => {
    return {
      author: item.user,
      message: item.text,
      room: item.room
    }
  })
}
