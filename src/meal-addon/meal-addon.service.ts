import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { Knex } from 'nestjs-knex';
import { Model } from 'objection';
import { MealAddon } from './meal-addon.entity';
import { DbConnectionToken } from './db-connection.token';

@Injectable()
export class MealAddonService {
  constructor(
    @Inject(DbConnectionToken) private dbConnection: any,
    // @Inject('KnexConnection') private readonly connection: Knex,
    @InjectModel(MealAddon) private readonly mealAddonModel: typeof Model,
    private readonly knex: Knex,
  ) {}

  async create(brandId: number, mealAddon: MealAddon) {
    return this.mealAddonModel
      .query()
      .insert({
        brandId,
        name: mealAddon.name,
        description: mealAddon.description,
        price: mealAddon.price,
        category: mealAddon.category,
      });
  }

  async findAll(brandId: number) {
    return this.mealAddonModel
      .query()
      .where('brandId', brandId);
  }

  async findOne(brandId: number, addonId: number) {
    return this.mealAddonModel
      .query()
      .where('brandId', brandId)
      .andWhere('id', addonId)
      .first();
  }

  async update(brandId: number, addonId: number, mealAddon: MealAddon) {
    return this.mealAddonModel
      .query()
      .patchAndFetchById(addonId, {
        name: mealAddon.name,
        description: mealAddon.description,
        price: mealAddon.price,
        category: mealAddon.category,
      });
  }

  async remove(brandId: number, addonId: number) {
    return this.mealAddonModel
      .query()
      .delete()
      .where('brandId', brandId)
      .andWhere('id', addonId);
  }
}
