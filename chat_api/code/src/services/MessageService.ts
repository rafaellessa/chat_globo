import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/MessageRepository";

class MessageService {

  private messageRepository: Repository<Message>
  constructor() {
    this.messageRepository = getCustomRepository(MessageRepository)
  }

  async create(message: Message) {

    const parsedMessage = this.messageRepository.create(message)


    await this.messageRepository.save(parsedMessage)

    return parsedMessage
  }

  async delete(id: string) {

  }

  async put(message: Message) {

  }

  async getAll() {

  }
}

export { MessageService }