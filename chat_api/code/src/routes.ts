import { Router } from 'express'
import { ValidateToken } from './middleware/ValidateToken'
import { AuthController } from './controllers/AuthController'
import { UserController } from './controllers/UserController'
import { MessageController } from './controllers/MessageController'
const validateToken = new ValidateToken()
const routes = Router()
routes.use(validateToken.validate)

const userController = new UserController()
const authController = new AuthController()
const messageController = new MessageController()

routes.post('/register', authController.register)
routes.post('/auth', authController.authenticate)
routes.get('/users', userController.getAll)

routes.post('/messages', messageController.create)
export { routes }