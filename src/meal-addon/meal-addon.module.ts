import { Module } from '@nestjs/common';
import { KnexModule, KnexModuleOptions } from 'nestjs-knex';
import { MealAddonController } from './meal-addon.controller';
import { MealAddonService } from './meal-addon.service';
import { MealAddon } from './meal-addon.entity';
import { ObjectionModule } from 'nestjs-objection';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import knex from 'knex';


const knexConfig: KnexModuleOptions = {
  config:{ client: 'pg',
   connection: {
     host: 'localhost',
     user: 'postgres',
     password: '287693@Ata',
     database: 'rxgoodness',
   },}
 };
 
@Module({
  imports: [
    // KnexModule.forFeature,
    KnexModule.forRoot(knexConfig)
    // ObjectionModule.forFeature([MealAddon]),
    // TypeOrmModule.forFeature([MealAddon]),
    // TypeOrmModule.forFeature([UserModule]),
    // AuthModule,
    // UserModule
    
  ],
  controllers: [MealAddonController, 
    // ObjectionModule
  ],
  providers: [MealAddonService,
    // KnexModule,
    // {
    //   provide: 'default_ObjectionModuleConnectionToken_MealAddon',
    //   useFactory: async () => {
    //     // Return a Knex connection object
    //   },
    // },
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
