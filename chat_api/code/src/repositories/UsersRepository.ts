import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {

  async findByEmail(email: string) {
    return await this.findOne({ email })
  }

  async getAllUsers() {
    return await this.createQueryBuilder('user').orderBy('user.name').getMany()
  }
}

export { UsersRepository }
