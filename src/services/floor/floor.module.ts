import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Building } from "src/entity/building.entity";
import { Floor } from "src/entity/floor.entity";
import { FloorController } from "./floor.controller";
import { FloorRepository } from "./floor.repository";
import { FloorProvider } from "./floor.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Floor, Building])
    ],
    controllers: [FloorController],
    providers: [FloorProvider, FloorRepository]
})
export class FloorModule{}