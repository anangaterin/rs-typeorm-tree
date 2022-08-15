import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateFloorDTO, GetFloorDTO } from "src/dto/floor.dto";
import { FloorProvider } from "./floor.service";

@Controller('floors')
export class FloorController{

    constructor(private provider: FloorProvider){}


    @Get(':id')
    async get(@Param() data: GetFloorDTO){
        return this.provider.get(data)
    }

    @Post()
    async insert(@Body() data: CreateFloorDTO){
        return this.provider.insert(data)
    }
}