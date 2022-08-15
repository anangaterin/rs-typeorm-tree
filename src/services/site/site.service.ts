import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSiteDTO } from "src/dto/site.dto";
import { Site } from "src/entity/site.entity";
import { DeepPartial, Repository, SaveOptions, TreeRepository} from "typeorm";
import { SiteRepository } from "./site.repository";

@Injectable()
export class SiteProvider{
    constructor(
        private readonly siteRepository: SiteRepository
    ){
    }

    async test(){
        let data = {
            test: 'test',
            data : await this.siteRepository.findChildren()
        }

        return data
    }

    async tree(){
        return this.siteRepository.find({
            relations:['*']
        })
    }

    async insert(site: CreateSiteDTO){
        let newSite = new Site();
        newSite.name = site.name;
        newSite.address = site.address;
        return this.siteRepository.save(newSite);
    }
}