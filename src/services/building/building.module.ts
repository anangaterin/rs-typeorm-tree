import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Building } from "src/entity/building.entity";
import { BuildingController } from "./building.controller";
import { BuildingProvider } from "./building.service";

@Module({
    imports:[TypeOrmModule.forFeature([Building])],
    controllers:[BuildingController],
    providers: [BuildingProvider]
})
export class BuildingModule{}