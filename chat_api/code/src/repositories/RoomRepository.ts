
import { EntityRepository, Repository } from 'typeorm'
import { Room } from '../entities/Room'

@EntityRepository(Room)
class RoomRepository extends Repository<Room> {
  async getRooms () {
    return await this.createQueryBuilder('room').orderBy('room.name').getMany()
  }
}

export { RoomRepository }
