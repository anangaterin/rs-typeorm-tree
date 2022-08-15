import supertest from "supertest";
import { DataSource, EntityManager, ObjectType, QueryRunner, TreeRepository } from "typeorm";

export class CustomEntityManager extends EntityManager{
    constructor(connection: DataSource, queryRunner?: QueryRunner){
        super(connection,queryRunner )
    }

    addTreeRepository(repository: TreeRepository<unknown>): TreeRepository<unknown>{
        this.treeRepositories.push(repository)
        return repository
    }
}