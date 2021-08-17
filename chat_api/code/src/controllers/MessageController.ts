import { Request, Response } from 'express'
import { MessageService } from '../services/MessageService'
class MessageController {
  async create (request: Request, response: Response): Promise<Response> {
    try {
      const { message } = request.body
      const messageService = new MessageService()
      const result = await messageService.create(message)

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

  async getAll (reques: Request, response: Response) {
    try {
      const messageService = new MessageService()
      const result = await messageService.getAll()

      return response.status(200).send({
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
}

export { MessageController }
