import { JwtAdapter } from "../adapters/JwtAdapter";
import { Request, Response, NextFunction } from 'express'
class ValidateToken {

  private jwtAdapter: JwtAdapter
  constructor() {
    this.jwtAdapter = new JwtAdapter()
  }

  validate(request: Request, response: Response, next: NextFunction) {
    const ignorePaths = [
      '/register',
      '/auth',
      '/forgot-password'
    ]

    if (!ignorePaths.includes(request.path)) {
      const token = request.headers.authorization
      if (!token) {
        return response.status(401).send({
          error: true,
          message: 'Token not found'
        })
      }

      try {
        const jwtAdapter = new JwtAdapter()
        const validToken = jwtAdapter.verify(token)
        response.locals.token = validToken
      } catch (error) {
        return response.status(401).send({
          error: true,
          message: 'Invalid token'
        })
      }
    }
    next()
  }
}

export { ValidateToken }