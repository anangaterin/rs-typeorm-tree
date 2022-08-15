import { Injectable } from "@nestjs/common";
import { CustomTreeRepository } from "src/decorators/repository";
import { Amenity } from "src/entity/amenity.entity";
import { DataSource } from "typeorm";

@Injectable()
export class AmenityRepository extends CustomTreeRepository<Amenity>{
    constructor(private dataSource: DataSource)
    {
        super(Amenity, dataSource.createEntityManager());
    }
}