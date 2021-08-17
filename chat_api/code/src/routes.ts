import { Router } from 'express'
import { ValidateToken } from './middleware/ValidateToken'
import { AuthController } from './controllers/AuthController'
import { UserController } from './controllers/UserController'
import { MessageController } from './controllers/MessageController'
import { RoomController } from './controllers/RoomController'

const validateToken = new ValidateToken()
const routes = Router()

routes.use(validateToken.validate)

const userController = new UserController()
const authController = new AuthController()
const messageController = new MessageController()
const roomController = new RoomController()

// Auth
routes.post('/register', authController.register)
routes.post('/auth', authController.authenticate)

// Users
routes.get('/users', userController.getAll)

// Rooms
routes.post('/rooms', roomController.create)
routes.get('/rooms', roomController.getRooms)

// Messages
routes.post('/messages', messageController.create)
routes.get('/messages', messageController.getAll)

export { routes }
