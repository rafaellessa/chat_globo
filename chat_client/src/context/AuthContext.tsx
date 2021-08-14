import React, { createContext, useState } from 'react'

interface AuthContextProps {
  authenticated: boolean
  user: object | null
  handleLogin: () => Promise<void>
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true)
  const [user, setUser] = useState<object | null>(null)

  const handleLogin = async () => {

  }

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
