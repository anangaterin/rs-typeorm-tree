import { Injectable } from "@nestjs/common";
import { TREE_KEY } from "src/decorators/decorator.constant";
import { CustomTreeRepository } from "src/decorators/repository";
import { Site } from "src/entity/site.entity";
import { DataSource, DeepPartial, Repository, SaveOptions } from "typeorm";

@Injectable()
export class SiteRepository extends CustomTreeRepository<Site>{
    constructor(private dataSource: DataSource)
    {
        super(Site, dataSource.createEntityManager());
    }
}