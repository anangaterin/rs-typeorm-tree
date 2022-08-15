import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateLotDTO, GetLotParamDTO } from "src/dto/lot.dto";
import { LotProvider } from "./lot.service";


@Controller('lots')
export class LotController{

    constructor(private provider: LotProvider){}

    @Get(':id')
    async get(@Param() param:GetLotParamDTO){
        return this.provider.get(param)
    }

    @Post()
    async insert(@Body() data: CreateLotDTO){
        return this.provider.insert(data)
    }
}