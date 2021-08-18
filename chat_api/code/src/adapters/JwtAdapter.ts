import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET
class JwtAdapter {
  async generateToken (payload: any, ttl: string | number): Promise<string> {
    return await jwt.sign(payload, secret, { expiresIn: ttl })
  }

  verify (token: string) {
    return jwt.verify(token.replace('Bearer ', ''), secret, { ignoreExpiration: false })
  }
}

export { JwtAdapter }
