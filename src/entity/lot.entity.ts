import { Column, Entity } from "typeorm";

@Entity()
export class Lot{
    @Column({
        type: "uuid",
        primary: true
    })
    id: string

    @Column()
    lotNumber: string
}