import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm'
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
  created_at: Date

  @JoinColumn({ name: "author_id" })
  @ManyToOne(() => User)
  user: User

  @JoinColumn({ name: "room_id" })
  @ManyToOne(() => Room)
  room: Room

  @Column()
  destination_id: string

  @Column()
  author_id: string

  @Column()
  room_id: string


  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Message }
