import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ClimateType } from './climate-type.enum';

@Entity()
export class Climate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: ClimateType;

  @Column('decimal', { precision: 10, scale: 2 })
  value: number;

  @Column()
  time: Date;

  @Column()
  garden_id: string;
}
