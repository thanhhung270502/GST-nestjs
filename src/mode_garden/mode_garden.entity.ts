import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mode_Garden {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    garden_id: string;

    @Column()
    mode: string;
}