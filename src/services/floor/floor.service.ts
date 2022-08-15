import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFloorDTO, GetFloorDTO } from 'src/dto/floor.dto';
import { Building } from 'src/entity/building.entity';
import { Floor } from 'src/entity/floor.entity';
import {Repository } from 'typeorm';
import { FloorRepository } from './floor.repository';

@Injectable()
export class FloorProvider {
  constructor(
    private readonly floorRepository: FloorRepository,
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {}

  async get(param: GetFloorDTO) {
    const repo = this.floorRepository;
    return repo.find();
  }

  async insert(data: CreateFloorDTO) {
    const { number, buildingId } = data;

    const building = await this.buildingRepository
      .manager
      .getRepository(data.parentType)
      .findOneBy({
        id: data.buildingId
      })

    let newFloor = new Floor();
    newFloor.number = number;
    newFloor.parent = building;

    return this.floorRepository.save(newFloor);
  }
}
