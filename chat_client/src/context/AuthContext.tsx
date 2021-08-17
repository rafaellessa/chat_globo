import React, { createContext, useState } from 'react'
import AuthService from '../data/services/auth'
import { RegisterParams } from '../data/services/auth/types'
import { User } from '../data/services/users/types'
interface AuthContextProps {
  authenticated: boolean
  user: object | null
  handleLogin: (email: string, password: string) => Promise<LoginReturnApi>
  handleRegister: (data: RegisterParams) => Promise<any>
  errorLogin: string | undefined
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
  const [authenticated, setAuthenticated] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | undefined>('')

  const handleLogin = async (email: string, password: string) => {
    const response: LoginReturnApi = await AuthService.login(email, password)
    console.log('saklskasak', response)
    if (!response.data.token) {
      return {} as LoginReturnApi
    }

    setUser(response.data.user)
    setAuthenticated(true)
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
    <AuthContext.Provider value={{ authenticated, handleLogin, handleRegister, user, errorLogin: error }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
