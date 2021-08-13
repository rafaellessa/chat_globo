import { Entity, Column, CreateDateColumn, PrimaryColumn, BeforeInsert, BeforeUpdate } from 'typeorm'
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'

export interface UserProps {
  name: string
  email: string
  password: string
}

@Entity("users")
class User {

  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at?: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hashSync(this.password, 10)
  }

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { User }
