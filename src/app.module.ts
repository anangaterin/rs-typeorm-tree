import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Amenity } from './entity/amenity.entity';
import { Building } from './entity/building.entity';
import { Floor } from './entity/floor.entity';
import { Lot } from './entity/lot.entity';
import { Site } from './entity/site.entity';
import { Tree } from './entity/tree.entity';
import { AmenityModule } from './services/amenity/amenity.module';
import { BuildingModule } from './services/building/building.module';
import { FloorModule } from './services/floor/floor.module';
import { LotModule } from './services/lot/lot.module';
import { SiteModule } from './services/site/site.module';

@Module({
  imports: [
    BuildingModule,
    SiteModule,
    FloorModule,
    LotModule,
    AmenityModule,
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '.',
      database: 'tree',
      entities: [
        Site,
        Building,
        Floor,
        Amenity,
        Lot,
        Tree
      ],
      synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
