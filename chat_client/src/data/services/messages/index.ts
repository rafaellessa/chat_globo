import Api from '../../datasource/api'
import action from './action'

const messageService = {
  async getAll () {
    const instance = Api.getApiInstance(action.getAll)
    const response = await instance.request({
      method: 'GET'
    })
  }
}

export default messageService
