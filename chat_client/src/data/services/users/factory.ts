import { User, UserResponseApi } from './types'
export const factoryUser = (data: UserResponseApi[]): User[] => {
  const parsedUser: User[] = data.map((item) => {
    return {
      email: item.email,
      id: item.id,
      name: item.name
    }
  })

  return parsedUser
}
