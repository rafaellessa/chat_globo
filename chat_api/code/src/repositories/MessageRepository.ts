import { EntityRepository, Repository } from 'typeorm'
import { Message } from '../entities/Message'

@EntityRepository(Message)
class MessageRepository extends Repository<Message> {
  async getMessages () {
    return await this.createQueryBuilder('message').orderBy('message.created_at', 'DESC').getMany()
  }
}

export { MessageRepository }
