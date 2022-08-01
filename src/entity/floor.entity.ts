import { Column, Entity } from "typeorm";

@Entity()
export class Floor{
    @Column({
        type: 'uuid',
        primary: true
    })
    id: string

    @Column()
    floorNumber: number
}