import { json, Request, Response } from "express";
import { User } from "../entities/User";
import { UserService } from '../services/UserService'
class UserController {

  async create(request: Request, response: Response): Promise<Response> {

    try {

      const userService = new UserService()
      const { name, email, password } = request.body as User

      const user = await userService.create({
        name,
        email,
        password
      })

      return response..status(201).json(user)

    } catch (error) {
      return response.status(400).send({
        error: true,
        message: error.message
      })
    }
  }

  async register(request: Request, response: Response): Promise<Response> {
    try {
      const userService = new UserService()
      const { email } = request.body

      const user = await userService.findUserEmail(email)

      if (user) {
        throw new Error('User already exists!')
      }
      return response.status(201).json(user)
    } catch (error) {

      return response.status(400).send({
        error: true,
        message: error.message
      })
    }

  }
}

export { UserController }