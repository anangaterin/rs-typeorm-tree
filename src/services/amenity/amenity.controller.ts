import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateAmenityDTO, GetAmenityDTO } from "src/dto/amenity.dto";
import { AmenityProvider } from "./amenity.service";

@Controller('amenities')
export class AmenityController{
    constructor(private provider: AmenityProvider){}

    @Get(':id')
    async get(@Param() data: GetAmenityDTO){
        return this.provider.test(data)
    }

    @Post()
    async insert(@Body() data: CreateAmenityDTO){
        return this.provider.insert(data)
    }
}