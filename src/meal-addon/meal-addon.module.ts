import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { MealAddonController } from './meal-addon.controller';
import { MealAddonService } from './meal-addon.service';
import { MealAddon } from './meal-addon.entity';

@Module({
  imports: [
    KnexModule,
  ],
  controllers: [MealAddonController],
  providers: [MealAddonService,
    // {
    //   provide: 
    //   // MealAddonRepository,
    //   'KnexConnection',
    //   useValue: MealAddon,
    // },
    MealAddon
  ],
  // exports:[MealAddonService]
})
export class MealAddonModule {}
