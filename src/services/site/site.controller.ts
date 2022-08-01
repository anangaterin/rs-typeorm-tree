import { Controller, Post } from "@nestjs/common";

@Controller('site')
export class SiteController{
    @Post()
    async insert(){
        return 'OK'
    }
}