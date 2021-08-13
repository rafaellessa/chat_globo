import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET
class JwtAdapter {

  async generateToken(payload: any, ttl: string | number) {

    return await jwt.sign(payload, secret, { expiresIn: ttl })
  }
}

export { JwtAdapter }