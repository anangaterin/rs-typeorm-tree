import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateSiteDTO, GetSiteDTO } from "src/dto/site.dto";
import { SiteProvider } from "./site.service";

@Controller('sites')
export class SiteController{

    constructor(private provider: SiteProvider){}

    @Get()
    async list(){
        return this.provider.tree()
    }

    @Get('test')
    async test(){
        return this.provider.test()
    }
    
    @Get(':id')
    async read(@Param() data: GetSiteDTO){
        return this.provider.get(data);
    }

    @Post()
    async insert(@Body() data: CreateSiteDTO){
        return this.provider.insert(data);
    }

}