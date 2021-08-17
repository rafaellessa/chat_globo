export interface User {
  id: string;
  name: string;
  email: string;
  created_at?: string
}

export interface UserResponseApi {
  id: string
  name: string
  email: string
  password: string
  created_at: string
}
