import { getBaseUrl } from '../../../utils/api'

const action = {
  getRooms: `${getBaseUrl()}/rooms`,
  createRooms: `${getBaseUrl()}/rooms`
}

export default action
