import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/MessageRepository";

class MessageService {

  private messageRepository: Repository<Message>
  constructor() {
    this.messageRepository = getCustomRepository(MessageRepository)
  }

  async create(message: Message) {

  }

  async delete(id: string) {

  }

  async put(message: Message) {

  }

  async getAll() {

  }
}

export { MessageService }