import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    avatar: string;

    @Column()
    garden_id: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}