import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Site } from "src/entity/site.entity";
import { TreeRepository } from "typeorm";
import { SiteController } from "./site.controller";
import { SiteRepository } from "./site.repository";
import { SiteProvider } from "./site.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Site
        ])
    ],
    controllers:[SiteController],
    providers:[SiteProvider, SiteRepository]
})
export class SiteModule{}