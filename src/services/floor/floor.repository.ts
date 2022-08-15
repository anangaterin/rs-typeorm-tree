import { Injectable } from "@nestjs/common";
import { CustomTreeRepository } from "src/decorators/repository";
import { Floor } from "src/entity/floor.entity";
import { DataSource } from "typeorm";

@Injectable()
export class FloorRepository extends CustomTreeRepository<Floor>{
    constructor(private dataSource: DataSource)
    {
        super(Floor, dataSource.createEntityManager());
    }
}