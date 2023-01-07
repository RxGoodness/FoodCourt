// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3005);
// }
// bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { ExpressModule } from '@nestjs/platform-express';
// import { AppModule } from './app.module';


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {
//     // Enable the ExpressModule
//     imports: [ExpressModule],
//   });
//   await app.listen(3005);
// }
// bootstrap();



import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const PORT = 3005
async function bootstrap() {
  console.log("This is starting")
  // Create an instance of the NestExpressApplication class
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(PORT);
  console.log(`This has started on port ${PORT}`)

}
bootstrap();
