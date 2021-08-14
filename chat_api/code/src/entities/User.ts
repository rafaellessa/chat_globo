import bcrypt from 'bcrypt'
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

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
