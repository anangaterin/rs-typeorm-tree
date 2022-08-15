
import { Children, Parent } from "src/decorators/decorator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Amenity } from "./amenity.entity";
import { Building } from "./building.entity";
import { Lot } from "./lot.entity";

@Entity()
export class Floor{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    number: number

    @Children()
    children: any[]

    @Parent()
    parent: any

    type: string = this.constructor.name

}