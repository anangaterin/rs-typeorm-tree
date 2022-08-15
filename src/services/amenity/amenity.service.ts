import { Injectable } from "@nestjs/common";
import { CreateAmenityDTO, GetAmenityDTO } from "src/dto/amenity.dto";
import { Amenity } from "src/entity/amenity.entity";
import { AmenityRepository } from "./amenity.repository";

@Injectable()
export class AmenityProvider {
    constructor(
        private readonly amenityRepository: AmenityRepository,
    ){}

    async insert(data: CreateAmenityDTO){
        const {name, parentId, parentType} = data

        const parent = await this.amenityRepository.manager.getRepository(parentType)
        .findOneBy({
            id: parentId
        })

        let newAmenity = new Amenity()
        newAmenity.name = name
        newAmenity.parent = parent

        return this.amenityRepository.save(newAmenity)
    }

    async test(param: GetAmenityDTO){
        return this.amenityRepository.findParent({
            where: {
                id: param.id
            }
        })
    }
}