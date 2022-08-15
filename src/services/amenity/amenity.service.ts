import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAmenityDTO, GetAmenityDTO } from "src/dto/amenity.dto";
import { Amenity } from "src/entity/amenity.entity";
import { Floor } from "src/entity/floor.entity";
import { Repository } from "typeorm";
import { AmenityRepository } from "./amenity.repository";

@Injectable()
export class AmenityProvider {
    constructor(
        private readonly amenityRepository: AmenityRepository,
        @InjectRepository(Floor) private readonly floorRepository: Repository<Floor>
    ){}

    async insert(data: CreateAmenityDTO){
        const {name, floorId} = data

        const floor = await this.floorRepository.findOneBy({
            id: floorId
        })

        let newAmenity = new Amenity()
        newAmenity.name = name
        newAmenity.parent = floor

        return this.amenityRepository.save(newAmenity)
    }

    async test(param: GetAmenityDTO){
        return this.amenityRepository.findParent()
    }
}