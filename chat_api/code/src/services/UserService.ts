import { getCustomRepository, Repository } from 'typeorm';
import { User } from "../entities/User";
import { UsersRepository } from '../repositories/UsersRepository';

class UserService {

  private userRepository: Repository<User>
  constructor() {
    this.userRepository = getCustomRepository(UsersRepository)
  }

  async create(user: User) {

  }

  async getUser(id: string) {

  }
}

export { UserService }