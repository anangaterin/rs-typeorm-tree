import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Site } from "src/entity/site.entity";
import { Repository } from "typeorm";

@Injectable()
export class SiteProvider{
    constructor(
        @InjectRepository(Site)
        siteRepository: Repository<Site>
    ){}

    async insert(){
        return 'OK'
    }
}