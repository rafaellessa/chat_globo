import { getCustomRepository, Repository } from 'typeorm'
import { Room } from '../entities/Room'
import { RoomRepository } from '../repositories/RoomRepository'

interface RoomProps {
  name: string
}

class RoomService {
  private roomRepository: Repository<Room>
  constructor () {
    this.roomRepository = getCustomRepository(RoomRepository)
  }

  async create (room: RoomProps) {
    const parsedRoom = this.roomRepository.create(room)

    await this.roomRepository.save(parsedRoom)

    return parsedRoom
  }

  async delete (id: string) {

  }

  async put (room: Room) {

  }

  async getRooms () {
    const repo = getCustomRepository(RoomRepository)
    const rooms = await repo.getRooms()

    return rooms
  }
}

export { RoomService }
