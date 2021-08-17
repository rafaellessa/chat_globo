import { factoryUser } from './factory'
import action from './actions'
import { User } from './types'
import Api from '../../datasource/api'
const UserService = {
  async getAllUsers (): Promise<User[]> {
    const instance = Api.getApiInstance(action.getAll)
    const response = await instance.request({
      method: 'GET'
    })

    return factoryUser(response.data.data)
  }
}

export default UserService
