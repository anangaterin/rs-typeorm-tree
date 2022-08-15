import { Children, Parent } from "src/decorators/decorator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Tree} from "typeorm"
import { Building } from "./building.entity"
import { Floor } from "./floor.entity"

@Entity()
export class Amenity{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Children()
    children: any[]

    @Parent()
    parent: any

    type: string = this.constructor.name
}