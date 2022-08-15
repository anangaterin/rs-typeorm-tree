import { Injectable } from "@nestjs/common";
import { CustomTreeRepository } from "src/decorators/repository";
import { Lot } from "src/entity/lot.entity";
import { DataSource } from "typeorm";

@Injectable()
export class LotRepository extends CustomTreeRepository<Lot>{
    constructor(private dataSource: DataSource)
    {
        super(Lot, dataSource.createEntityManager());
    }
}