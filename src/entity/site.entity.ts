import { Children } from "src/decorators/decorator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Building } from "./building.entity";

@Entity()
export class Site{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    address: string

    @Children()
    children: any[]

    type: string = this.constructor.name

}