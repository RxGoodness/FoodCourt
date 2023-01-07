import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBrandDto {

  @IsNumber()
  @IsOptional()
  id: number

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  mealAddons?: any[];

  user: any;
}


// import { IsString } from 'class-validator';
// import { Brand } from './brand.model';

// export class CreateBrandDto implements Brand {
//   @IsString()
//   name: string;

//   @IsString()
//   description: string;

//   mealAddons: any[];

//   user: any;
// }
