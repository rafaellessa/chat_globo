import { Router } from 'express'
import { AuthController } from './controllers/AuthController'
import { UserController } from './controllers/UserController'
const routes = Router()

const userController = new UserController()
const authController = new AuthController()

routes.post('/register', authController.register)
routes.post('/auth', authController.authenticate)

export { routes }