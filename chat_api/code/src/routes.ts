import { Router } from 'express'
import { ValidateToken } from './middleware/ValidateToken'
import { AuthController } from './controllers/AuthController'
import { UserController } from './controllers/UserController'
const validateToken = new ValidateToken()
const routes = Router()
routes.use(validateToken.validate)

const userController = new UserController()
const authController = new AuthController()

routes.post('/register', authController.register)
routes.post('/auth', authController.authenticate)
routes.get('/users', userController.getAll)

export { routes }