import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserKey {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @Column()
    key: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}