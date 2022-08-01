import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '.',
      database: 'tree',
      entities: [],
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
