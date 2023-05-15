import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Garden {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    url: string;

    @Column()
    gKey: string;
}