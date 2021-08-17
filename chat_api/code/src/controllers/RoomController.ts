import { Request, Response } from 'express'
import { RoomService } from '../services/RoomService'

class RoomController {
  async create (request: Request, response: Response): Promise<Response> {
    try {
      const roomService = new RoomService()

      const { name } = request.body
      const result = await roomService.create({
        name
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

  async getRooms (request: Request, response: Response): Promise<Response> {
    try {
      const roomService = new RoomService()
      const rooms = await roomService.getRooms()

      return response.status(200).send({
        success: true,
        data: rooms
      })
    } catch (error) {
      return response.status(400).send({
        error: true,
        message: error.message
      })
    }
  }
}

export { RoomController }
