import { Injectable } from "@nestjs/common";
import { CustomTreeRepository } from "src/decorators/repository";
import { Building } from "src/entity/building.entity";
import { DataSource } from "typeorm";

@Injectable()
export class BuildingRepository extends CustomTreeRepository<Building>{
    constructor(private dataSource: DataSource)
    {
        super(Building, dataSource.createEntityManager());
    }
}