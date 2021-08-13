import { Request, Response } from "express";
import { UserService } from '../services/UserService'
class UserController {

  async create(request: Request, response: Response): Promise<Response> {

    try {

      const userService = new UserService()
      const { name, email, password } = request.body

      const user = await userService.create({
        name,
        email,
        password
      })

      return response.json(user).status(201)

    } catch (error) {
      return response.send({
        error: true,
        message: error.message
      }).status(404)
    }
  }
}

export { UserController }