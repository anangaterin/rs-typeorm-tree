import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Floor } from "src/entity/floor.entity";
import { Lot } from "src/entity/lot.entity";
import { LotController } from "./lot.controller";
import { LotProvider } from "./lot.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Lot, Floor])
    ],
    controllers: [LotController],
    providers: [LotProvider]
})
export class LotModule{}