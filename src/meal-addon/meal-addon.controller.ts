// import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
// import { MealAddon } from './meal-addon.entity';
// import { MealAddonService } from './meal-addon.service';
// import { AuthGuard } from '../auth/auth.guard';
// import { Role } from '../auth/role.decorator';
// import { Roles } from '../auth/roles.enum';

// @Controller('brands/:brandId/addons')
// export class MealAddonController {
//   constructor(private readonly mealAddonService: MealAddonService) {}

//   @Post()
//   @UseGuards(AuthGuard)
//   @Role(Roles.ADMIN)
//   async create(@Param('brandId') brandId: number, @Body() mealAddon




import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { MealAddon } from './meal-addon.entity';
import { MealAddonService } from './meal-addon.service';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.decorator';
import { Roles } from '../auth/roles.enum';

@Controller('brands/:brandId/addons')
export class MealAddonController {
  constructor(private readonly mealAddonService: MealAddonService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Role(Roles.ADMIN)
  async create(@Param('brandId') brandId: number, @Body() mealAddon: MealAddon) {
    return this.mealAddonService.create(brandId, mealAddon);
  }

  @Get()
  async findAll(@Param('brandId') brandId: number) {
    return this.mealAddonService.findAll(brandId);
  }

  @Get(':addonId')
  async findOne(@Param('brandId') brandId: number, @Param('addonId') addonId: number) {
    return this.mealAddonService.findOne(brandId, addonId);
  }

  @Patch(':addonId')
  @UseGuards(AuthGuard)
  @Role(Roles.ADMIN)
  async update(@Param('brandId') brandId: number, @Param('addonId') addonId: number, @Body() mealAddon: MealAddon) {
    return this.mealAddonService.update(brandId, addonId, mealAddon);
  }

  @Delete(':addonId')
  @UseGuards(AuthGuard)
  @Role(Roles.ADMIN)
  async remove(@Param('brandId') brandId: number, @Param('addonId') addonId: number) {
    return this.mealAddonService.remove(brandId, addonId);
  }
}
