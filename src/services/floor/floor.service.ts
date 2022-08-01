import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Floor } from "src/entity/floor.entity";
import { Repository } from "typeorm";


@Injectable()
export class FloorProvider{
    constructor(
        @InjectRepository(Floor)
        floorRepository: Repository<Floor>
    ){}

    async insert(){
        return "OK"
    }
}