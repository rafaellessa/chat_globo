import { UserProps } from './../entities/User';
import { UserService } from './UserService';
import { JwtAdapter } from '../adapters/JwtAdapter';
import { EncrypterAdapter } from '../adapters/EncrypterAdapter'

class AuthService {

  async authenticate(email: string, password: string): Promise<string> {
    const userService = new UserService()
    const user = await userService.findUserEmail(email)
    const encrypter = new EncrypterAdapter()
    const jwt = new JwtAdapter()

    if (!user) {
      throw new Error('User not found!')
    }

    if (!encrypter.verifyPassword(password, user.password)) {
      throw new Error('Incorrect password')
    }

    const token = await jwt.generateToken({ ...user }, "8h")

    return token

  }

  async register(data: UserProps) {

    const userService = new UserService()

    const { email } = data
    const user = await userService.findUserEmail(email)

    if (user) {
      throw new Error('User already exists!')
    }

    const parsedUser = await userService.create(data)

    return parsedUser

  }
}

export { AuthService }