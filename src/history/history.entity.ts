import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class History {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    editor: string;

    @Column()
    activity: string;

    @Column()
    time: Date;
}