import {
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
}
