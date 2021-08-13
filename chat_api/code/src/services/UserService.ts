import { getCustomRepository, Repository } from 'typeorm';
import { User, UserProps } from "../entities/User";
import { UsersRepository } from '../repositories/UsersRepository';

class UserService {

  private userRepository: Repository<User>
  constructor() {
    this.userRepository = getCustomRepository(UsersRepository)
  }

  async findUserEmail(email: string) {
    const repo = getCustomRepository(UsersRepository)
    const user = await repo.findByEmail(email)
    return user
  }

  async create(data: UserProps) {

    const parsedUser = this.userRepository.create({ ...data })
    await this.userRepository.save(parsedUser)

    parsedUser.password = undefined

    return parsedUser;

  }

  async getUser(id: string) {

  }
}

export { UserService }