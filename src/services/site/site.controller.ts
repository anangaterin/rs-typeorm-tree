import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateSiteDTO } from "src/dto/site.dto";
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


    @Post()
    async insert(@Body() data: CreateSiteDTO){
        return this.provider.insert(data);
    }

}