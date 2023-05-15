import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_name: string;

  @Column()
  garden_id: string;

  @Column()
  activity: string;

  @Column()
  time: Date;
}
