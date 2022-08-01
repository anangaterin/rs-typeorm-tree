import { Controller, Post } from "@nestjs/common";


@Controller('lot')
export class LotController{
    @Post()
    async insert(){
        return 'OK'
    }
}