import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TREE_KEY_SEPARATOR } from 'src/decorators/decorator.constant';
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
    let building =  await this.buildingRepository.findParent({where:{
      id: data.id
    }})
    return building
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
