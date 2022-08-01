import { Column, Entity } from "typeorm";

@Entity()
export class Site{
    @Column({
        type: "uuid",
        primary: true
    })
    id: String

    @Column()
    name: String

    @Column()
    address: String
}