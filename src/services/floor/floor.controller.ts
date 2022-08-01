import { Controller, Post } from "@nestjs/common";

@Controller('floor')
export class FloorController{
    @Post()
    async insert(){
        return "OK"
    }
}