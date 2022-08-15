import { Injectable } from "@nestjs/common";
import { CreateSiteDTO, GetSiteDTO } from "src/dto/site.dto";
import { Site } from "src/entity/site.entity";
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
        return this.siteRepository.find()
    }

    async get(data: GetSiteDTO){
        return this.siteRepository.findChildren({
            where:{
                id: data.id
            }
        })
    }

    async insert(site: CreateSiteDTO){
        let newSite = new Site();
        newSite.name = site.name;
        newSite.address = site.address;
        return this.siteRepository.save(newSite);
    }
}