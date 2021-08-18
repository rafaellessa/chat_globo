import { Room } from './types'

export const factoryRooms = (data: Room[]): Room[] => {
  return data.map((room) => {
    return {
      id: room.id,
      name: room.name
    }
  })
}
