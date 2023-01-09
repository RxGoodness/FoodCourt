// // import { Module } from '@nestjs/common';
// // import { AppController } from './app.controller';
// // import { AppService } from './app.service';
// // import { BrandsModule } from './brands/brands.module';

// // @Module({
// //   imports: [BrandsModule],
// //   controllers: [AppController],
// //   providers: [AppService],
// // })
// // export class AppModule {}



// import { Module } from '@nestjs/common';
// import { KnexModule } from 'nestjs-knex';
// import { AuthModule } from './auth/auth.module';
// import { AuthService } from './auth/auth.service';
// import { BrandModule } from './brand/brand.module';
// import { MealAddonModule } from './meal-addon/meal-addon.module';
// import { MealAddonService } from './meal-addon/meal-addon.service';
// import { UserModule } from './user/user.module';
// // import { MealAddonCategoryModule } from './meal-addon-category/meal-addon-category.module';


// // import { Module } from '@nestjs/common';
// // import { KnexModule } from 'nestjs-knex';

// @Module({
//   imports: [
//     KnexModule.forRoot({
//       config: {
//         client: 'postgresql',
//         connection: {
//           host: 'localhost',
//           user: 'postgres',
//           password: '287693@Ata',
//           database: 'rxgoodness',
//         },
//       },
//       // useNullAsDefault: true,
//     }),
//     // MealAddonModule
//     AuthModule,
//     // UserModule
//     // BrandModule

//   ],
//   // providers: [
//   //   // MealAddonService, 
//   //   AuthService
//   // ]
// })
// export class AppModule {}



// // @Module({
// //   imports: [
// //     KnexModule.forRoot({
//       // config: {
//       //           client: 'pg',
//       //           connection: {
//       //             host: 'localhost',
//       //             user: 'root',
//       //             password: 'password',
//       //             database: 'mydatabase',
//       //           },
//       //           useNullAsDefault: true,
//       //         },
// //       client: 'pg',
// //       connection: 'postgres://user:password@localhost/database',
// //       useNullAsDefault: true,
// //       migrations: {
// //         directory: './migrations',
// //       },
// //     }),
// //     MealAddonModule,
// //     // MealAddonCategoryModule,
// //   ],
// // })
// // export class AppModule {}





// // import { Module } from '@nestjs/common';
// // import { KnexModule } from 'nestjs-knex';

// // @Module({
// //   imports: [
// //     KnexModule.forRoot({
// //       config: {
// //         client: 'mysql',
// //         connection: {
// //           host: 'localhost',
// //           user: 'root',
// //           password: 'password',
// //           database: 'mydatabase',
// //         },
// //         useNullAsDefault: true,
// //       },
// //       migrations: {
// //         directory: './migrations',
// //       },
// //     }),
// //   ],
// // })
// // export class AppModule {}




// // import { Module } from '@nestjs/common';
// // import { TypeOrmModule } from '@nestjs/typeorm';
// // import { ConfigModule } from './config/config.module';
// // import { AuthModule } from './auth/auth.module';
// // import { UserModule } from './user/user.module';
// // import { BrandModule } from './brand/brand.module';
// // import { MealAddonModule } from './meal-addon/meal-addon.module';

// // @Module({
// //   imports: [
// //     TypeOrmModule.forRoot(),
// //     ConfigModule,
// //     AuthModule,
// //     UserModule,
// //     BrandModule,
// //     MealAddonModule,
// //   ],
// // })
// // export class AppModule {}
















// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { KnexModule } from 'nestjs-knex';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: 'password',
//       database: 'meal_management',
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//     KnexModule.forRoot({
//       client: 'pg',
//       connection: {
//         host: 'localhost',
//         user: 'postgres',
//         password: 'password',
//         database: 'meal_management',
//       },
//     }),
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}










import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KnexModule, KnexModuleOptions } from 'nestjs-knex';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { BrandModule } from './brand/brand.module';
// import { DbConnectionToken } from './meal-addon/db-connection.token';
import { MealAddonController } from './meal-addon/meal-addon.controller';
import { MealAddonModule } from './meal-addon/meal-addon.module';
import { MealAddonService } from './meal-addon/meal-addon.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

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
    AuthModule,
    UserModule,
    MealAddonModule,
    BrandModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: '287693@Ata',
    //   database: 'rxgoodness',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    KnexModule.forRoot(knexConfig),
    // MealAddonModule,
    // BrandModule,
    // AppModule

  ],
  providers: [AppService, 
    // { provide: 'KnexConnection', useFactory: () => knexConfig, useValue:'dafault_connection' },
    // { provide: DbConnectionToken, useValue: 'default_connection' } 
  ],
  controllers: [AppController],
  // providers: [AuthService, UserService, MealAddonService],
})
export class AppModule {}
