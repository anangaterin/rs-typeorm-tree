import { Children, Parent } from "src/decorators/decorator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Tree } from "typeorm";
import { Floor } from "./floor.entity";

@Entity()
export class Lot{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    number: string

    @Children()
    children: any[]

    @Parent()
    parent: any

    type: string = this.constructor.name

}

