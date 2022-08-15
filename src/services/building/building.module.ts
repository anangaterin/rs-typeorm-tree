import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomRepo } from "src/decorators/custom.repository";
import { Building } from "src/entity/building.entity";
import { Site } from "src/entity/site.entity";
import { BuildingController } from "./building.controller";
import { BuildingRepository } from "./building.repository";
import { BuildingProvider } from "./building.service";

@Module({
    imports:[TypeOrmModule.forFeature([Building, Site]), CustomRepo],
    controllers:[BuildingController],
    providers: [BuildingProvider, BuildingRepository]
})
export class BuildingModule{}