import 'moment-timezone';
import * as moment from 'moment';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  header: string;

  @Column()
  body: string;

  @CreateDateColumn()
  date_create: Date;

  @UpdateDateColumn()
  date_update: Date;

  @BeforeInsert()
  insertCreated() {
    this.date_create = new Date(
      moment().tz('Europe/Moscow').format('YYYY-MM-DD HH:mm:ss'),
    );
    this.date_update = new Date(
      moment().tz('Europe/Moscow').format('YYYY-MM-DD HH:mm:ss'),
    );
  }

  @BeforeUpdate()
  insertUpdated() {
    this.date_update = new Date(
      moment().tz('Europe/Moscow').format('YYYY-MM-DD HH:mm:ss'),
    );
  }
}
