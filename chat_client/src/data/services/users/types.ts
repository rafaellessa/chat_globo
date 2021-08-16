export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserResponseApi {
  id: string
  name: string
  email: string
  password: string
  created_at: string
}
