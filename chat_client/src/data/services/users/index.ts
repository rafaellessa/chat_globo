import { factoryUser } from './factory'
import makeRequest from '../../datasource/api/makeRequest'
import action from './actions'
import { User } from './types'
const UserService = {
  async getAllUsers (): Promise<User[]> {
    const response = await makeRequest({
      url: action.getAll
    })

    return factoryUser(response.data)
  }
}

export default UserService
