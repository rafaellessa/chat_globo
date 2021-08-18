import Api from '../../datasource/api'
import action from './actions'
import { factoryRooms } from './factory'

const RoomService = {
  async getRooms () {
    const instance = Api.getApiInstance(action.getRooms)
    const response = await instance.request({
      method: 'GET'
    })

    return factoryRooms(response.data.data)
  },

  async createRoom (name: string) {
    const instance = Api.getApiInstance(action.createRooms)
    const response = await instance.request({
      method: 'POST',
      data: {
        name
      }
    })

    return response.data
  }
}
export default RoomService
