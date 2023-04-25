import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ClimateType } from "./climate.model";

@Entity()
export class Climate {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: ClimateType;

    @Column()
    value: number;

    @Column()
    time: Date; 
}