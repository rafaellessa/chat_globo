import { getCustomRepository, Repository } from "typeorm";
import { Room } from "../entities/Room";
import { RoomRepository } from "../repositories/RoomRepository";

class RoomService {

  private roomRepository: Repository<Room>
  constructor() {
    this.roomRepository = getCustomRepository(RoomRepository)
  }

  async create(room: Room) {

  }

  async delete(id: string) {

  }

  async put(room: Room) {

  }

  async getAll() {

  }
}

export { RoomService }