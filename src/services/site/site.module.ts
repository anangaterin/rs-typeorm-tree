import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Site } from "src/entity/site.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Site
        ])
    ],
    controllers:[],
    providers:[]
})
export class SiteModule{}