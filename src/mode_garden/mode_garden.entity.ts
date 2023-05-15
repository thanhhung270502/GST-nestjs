import { ClimateType } from "src/climates/climate-type.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mode_Garden {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    garden_id: string;

    @Column()
    type: ClimateType;

    @Column()
    mode: string;
}