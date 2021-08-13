import bcrypt from 'bcrypt'

class EncrypterAdapter {

  async verifyPassword(password: string, passwordVerify: string): Promise<boolean> {

    return bcrypt.compareSync(password, passwordVerify)
  }

}

export { EncrypterAdapter }