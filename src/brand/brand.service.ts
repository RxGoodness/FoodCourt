import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './brand.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async findAll(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  async findOne(id: number): Promise<Brand> {
    return this.brandRepository.findOne({where: {id}});
  }

  async create(brand: Brand): Promise<Brand> {
    return this.brandRepository.save(brand);
  }

  async update(id: number, brand: Brand): Promise<Brand> {
    await this.brandRepository.update(id, brand);
    return this.brandRepository.findOne({where: {id}});
  }

  async delete(id: number): Promise<void> {
    await this.brandRepository.delete(id);
  }
}
