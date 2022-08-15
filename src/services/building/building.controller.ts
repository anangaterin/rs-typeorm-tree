import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateBuildingDTO, GetBuildingDTO } from "src/dto/building.dto";
import { BuildingProvider } from "./building.service";

@Controller('buildings')
export class BuildingController{

    constructor(private provider: BuildingProvider){}

    @Get('/tests')
    async test(){
        return this.provider.test()
    }


    @Post()
    async create(@Body() createBuildingDTO: CreateBuildingDTO){
        return this.provider.insert(createBuildingDTO);
    }

    @Get(':id')
    async get(@Param() data: GetBuildingDTO){
        return this.provider.get(data)
    }


    @Get()
    async list(){
        return "List Building"
    }
}