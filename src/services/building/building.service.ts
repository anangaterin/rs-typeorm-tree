import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'rxjs';
import { TREE_KEY, TREE_KEY_SEPARATOR } from 'src/decorators/decorator.constant';
import { ITreeCompleteMetadata, ITreeMetadata } from 'src/decorators/decorator.interface';
import { BuildingDTO, CreateBuildingDTO, GetBuildingDTO } from 'src/dto/building.dto';
import { Building } from 'src/entity/building.entity';
import { Site } from 'src/entity/site.entity';
import { Equal, Repository } from 'typeorm';
import { BuildingRepository } from './building.repository';

@Injectable()
export class BuildingProvider {
  constructor(
    private readonly buildingRepository: BuildingRepository,
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>,
  ) {}

  async test(){
    return this.buildingRepository.findParent()
  }

  async get(data: GetBuildingDTO){
    let building =  await this.buildingRepository.findOneBy({
      id: data.id
    })

    const repo = this.buildingRepository.extend({
      findMeta: async function(){
        let keys = Reflect.getMetadataKeys((this.metadata.target as Function)['prototype'])

        // Find keys to get relation key
        let relations: ITreeCompleteMetadata[] = [];

        keys.forEach((value:string)=>{
          let data = value.split(TREE_KEY_SEPARATOR)
          if(data.length == 2){
            let meta = Reflect.getMetadata(value,(this.metadata.target as Function)['prototype'])
            relations.push({
              ...meta
            })
          }
        })

        let rel: string[] = []

        relations = relations.filter((key: ITreeCompleteMetadata)=>{
          if(key.type == 'parent'){
            rel.push(key.key)
            return true
          }
        })
        return this.find({
          relations: rel
        })
      }
    })
    let type = await repo.findMeta()

    console.log(type)

    return type
  }

  async insert(building: CreateBuildingDTO): Promise<Building> {
    const { name, siteId } = building;


    let site = await this.siteRepository.findOneBy({
      id: Equal(siteId)
    })
    let newBuilding = new Building();
    newBuilding.name = name;
    newBuilding.parent = site;

    return this.buildingRepository.save(newBuilding);
  }
}
