import { getBaseUrl } from '../../../utils/api'

const action = {
  register: `${getBaseUrl()}/register`,
  login: `${getBaseUrl()}/auth`
}

export default action
