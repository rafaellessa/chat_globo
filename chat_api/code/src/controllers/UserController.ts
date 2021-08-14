import { Request, Response } from 'express'
import { UserService } from '../services/UserService';
class UserController {

  async getAll(request: Request, response: Response): Promise<Response> {

    try {

      const userService = new UserService()
      const users = await userService.getUsers()

      return response.status(200).send({
        success: true,
        data: users
      })
    } catch (error) {
      return response.status(400).send({
        error: true,
        message: error.message
      })
    }
  }
}

export { UserController };
