import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateBuildingDTO } from "src/dto/building.dto";

@Controller('buildings')
export class BuildingController{
    @Post()
    async create(@Body() createBuildingDTO: CreateBuildingDTO){
        return "Create Building"
    }

    @Get()
    async list(){
        return "List Building"
    }
}