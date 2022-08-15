import { Module } from "@nestjs/common";
import { LotController } from "./lot.controller";
import { LotRepository } from "./lot.repository";
import { LotProvider } from "./lot.service";

@Module({
    imports: [
    ],
    controllers: [LotController],
    providers: [LotProvider, LotRepository]
})
export class LotModule{}