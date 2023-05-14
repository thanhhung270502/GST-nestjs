import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  @Column()
  problem: string;

  @Column()
  sub_problem: string;

  @Column()
  time: Date;
}
