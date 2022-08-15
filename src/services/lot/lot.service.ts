import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLotDTO, GetLotParamDTO } from "src/dto/lot.dto";
import { Floor } from "src/entity/floor.entity";
import { Lot } from "src/entity/lot.entity";
import { Repository } from "typeorm";

@Injectable()
export class LotProvider{
    constructor(
        @InjectRepository(Lot) private readonly lotRepository: Repository<Lot>,
        @InjectRepository(Floor) private readonly floorRepository: Repository<Floor>
        ){}


        async get(param: GetLotParamDTO){
            return this.lotRepository.findOne({
                where:{id:param.id},
                relations: ['floor', 'floor.building', 'floor.building.site'] 
            })
        }

        async insert(data: CreateLotDTO){
            const {number, floorId} = data

            const floor = await this.floorRepository.findOneBy({
                id: floorId
            })


            let newLot = new Lot()
            newLot.number = number.toString()
            newLot.parent = floor

            return this.lotRepository.save(newLot)
        }

}