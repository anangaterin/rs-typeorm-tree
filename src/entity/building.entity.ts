import { Children, Parent } from "src/decorators/decorator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Tree} from "typeorm";
import { Floor } from "./floor.entity";
import { Site } from "./site.entity";

@Entity()
export class Building{
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