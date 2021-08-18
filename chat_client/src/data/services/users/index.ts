import { factoryUser } from './factory'
import action from './actions'
import { User } from './types'
import Api from '../../datasource/api'
const token = localStorage.getItem('token')
const UserService = {
  async getAllUsers (): Promise<User[]> {
    const instance = await Api.getApiInstance(action.getAll)
    const response = await instance.request({
      url: action.getAll,
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token }
    })

    return factoryUser(response.data.data)
  }
}

export default UserService
