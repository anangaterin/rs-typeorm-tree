import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Floor } from "src/entity/floor.entity";
import { FloorController } from "./floor.controller";
import { FloorProvider } from "./floor.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Floor])
    ],
    controllers: [FloorController],
    providers: [FloorProvider]
})
export class FloorModule{}