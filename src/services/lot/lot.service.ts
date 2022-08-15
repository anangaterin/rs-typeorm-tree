import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLotDTO, GetLotParamDTO } from "src/dto/lot.dto";
import { Floor } from "src/entity/floor.entity";
import { Lot } from "src/entity/lot.entity";
import { Repository } from "typeorm";
import { LotRepository } from "./lot.repository";

@Injectable()
export class LotProvider{
    constructor(
        private readonly lotRepository: LotRepository,
        ){}


        async get(param: GetLotParamDTO){
            return this.lotRepository.findParent({
                where:{id:param.id}
            })
        }

        async insert(data: CreateLotDTO){
            const {number, parentId, parentType} = data

            const floor = await this.lotRepository.manager.getRepository(parentType).findOneBy({
                id: parentId
            })


            let newLot = new Lot()
            newLot.number = number.toString()
            newLot.parent = floor

            return this.lotRepository.save(newLot)
        }

}