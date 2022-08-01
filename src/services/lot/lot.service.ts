import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lot } from "src/entity/lot.entity";
import { Repository } from "typeorm";

@Injectable()
export class LotProvider{
    constructor(@InjectRepository(Lot) lotRepository: Repository<Lot>){}
}