import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lot } from "src/entity/lot.entity";
import { LotController } from "./lot.controller";
import { LotProvider } from "./lot.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Lot])
    ],
    controllers: [LotController],
    providers: [LotProvider]
})
export class LotModule{}