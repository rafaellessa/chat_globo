import { Request, Response } from 'express'
import { AuthService } from '../services/AuthService'

class AuthController {
  async register (request: Request, response: Response): Promise<Response> {
    try {
      const authService = new AuthService()

      const { name, email, password } = request.body

      const result = await authService.register({
        email,
        name,
        password
      })

      return response.status(201).send({
        success: true,
        data: result
      })
    } catch (error) {
      return response.status(400).send({
        error: true,
        message: error.message
      })
    }
  }

  async authenticate (request: Request, response: Response): Promise<Response> {
    try {
      const authService = new AuthService()
      const { email, password } = request.body

      const result = await authService.authenticate(email, password)

      return response.status(200).send({
        success: true,
        data: {
          ...result
        }
      })
    } catch (error) {
      return response.status(401).send({
        error: true,
        message: error.message
      })
    }
  }
}

export { AuthController }
