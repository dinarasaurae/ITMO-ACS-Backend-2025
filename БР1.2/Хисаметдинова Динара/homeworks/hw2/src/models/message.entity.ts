import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Chat } from './chat.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Chat, (chat: Chat) => chat.messages)
  chat: Chat;

  @ManyToOne(() => User)
  sender: User;

  @Column('text')
  message: string;

  @CreateDateColumn()
  sent_at: Date;
}
