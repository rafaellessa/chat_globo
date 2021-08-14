import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessageRepository } from "../repositories/MessageRepository";

interface IMessage {
  text: string
  author_id: string
  destination_id: string
  room_id: string
}

class MessageService {

  private messageRepository: Repository<Message>
  constructor() {
    this.messageRepository = getCustomRepository(MessageRepository)
  }

  async create(message: IMessage) {

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