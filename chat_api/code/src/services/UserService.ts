import { getCustomRepository, Repository } from 'typeorm';
import { User } from "../entities/User";
import { UsersRepository } from '../repositories/UsersRepository';

class UserService {

  private userRepository: Repository<User>
  constructor() {
    this.userRepository = getCustomRepository(UsersRepository)
  }

  async create(user: User) {

    const parsedUser = this.userRepository.create({ ...user })
    await this.userRepository.save(parsedUser)

    return parsedUser

  }

  async getUser(id: string) {

  }
}

export { UserService }