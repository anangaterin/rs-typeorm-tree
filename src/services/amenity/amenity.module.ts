import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Amenity } from "src/entity/amenity.entity";
import { Floor } from "src/entity/floor.entity";
import { AmenityController } from "./amenity.controller";
import { AmenityRepository } from "./amenity.repository";
import { AmenityProvider } from "./amenity.service";


@Module({
    imports:[TypeOrmModule.forFeature([Amenity, Floor])],
    controllers:[AmenityController],
    providers: [AmenityProvider, AmenityRepository]
})
export class AmenityModule{}