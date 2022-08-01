import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BuildingDTO } from "src/dto/building.dto";
import { Building } from "src/entity/building.entity";
import { Repository } from "typeorm";

@Injectable()
export class BuildingProvider{

    constructor(
        @InjectRepository(Building)
        private readonly buildingRepository: Repository<Building>
    ){}

    async insert(building: BuildingDTO): Promise<Building>{
        const {name} = building;

        let newBuilding = new Building();
        newBuilding.name = name;

        return this.buildingRepository.save(newBuilding);
    }
}