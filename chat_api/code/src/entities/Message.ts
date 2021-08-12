import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'
import { Room } from './Room'

@Entity("messages")
class Message {

  @PrimaryColumn()
  id: string

  @Column()
  text: string

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[]

  @ManyToMany(() => Room)
  @JoinTable()
  rooms: Room[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Message }
