import React, { createContext, useState, useEffect } from 'react'
import AuthService from '../data/services/auth'
import { RegisterParams } from '../data/services/auth/types'
import { User } from '../data/services/users/types'
interface AuthContextProps {
  user: User | null
  handleLogin: (email: string, password: string) => Promise<LoginReturnApi>
  handleRegister: (data: RegisterParams) => Promise<any>
  errorLogin: string | undefined
  authenticated: boolean
}
interface AuthReturnApiProps {
  status: number
  data: any[]
  error?: boolean
  message?: string
}

interface LoginReturnApi {
  success?: boolean;
  status: number
  data: {
    token: string;
    user: User
  }
  error?: boolean;
  message?: string
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider: React.FC = ({ children }) => {
  const [authenticated] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  // const [user, setUser] = useState<User | null>({
  //   created_at: '2021-08-17T16:11:42.000Z',
  //   email: 'rafael.lessa150@gmail.com',
  //   id: 'cb2c9b70-178d-4940-b65c-cc98f46005a4',
  //   name: 'Rafael Lessa'
  // })
  const [error, setError] = useState<string | undefined>('')

  const handleLogin = async (email: string, password: string) => {
    const response: LoginReturnApi = await AuthService.login(email, password)
    if (!response.data.token) {
      return {} as LoginReturnApi
    }

    setUser(response.data.user)
    localStorage.setItem('token', response.data.token)

    return response
  }

  const handleRegister = async (data: RegisterParams): Promise<AuthReturnApiProps> => {
    const response:AuthReturnApiProps = await AuthService.register(data)

    if (response.status !== 201) {
      setError(response.message)
    }

    return response
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleRegister, user, errorLogin: error, authenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
