import Api from '../../datasource/api'
import action from './action'
import { RegisterParams } from './types'

const AuthService = {
  async register (data: RegisterParams) {
    const instance = Api.getApiInstance(action.register)
    const response = await instance.request({
      data,
      method: 'POST'
    })
    return response.data
  },
  async login (email: string, password: string) {
    const instance = Api.getApiInstance(action.login)
    const response = await instance.request({
      data: {
        email,
        password
      },
      method: 'POST'
    })
    return response.data
  }
}

export default AuthService
