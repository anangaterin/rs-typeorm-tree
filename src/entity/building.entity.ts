import { Column, Entity } from "typeorm";

@Entity()
export class Building{
    @Column({
        type: 'uuid',
        primary: true
    })
    id: String

    @Column()
    name: string
}