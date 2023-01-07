import { IsString, IsOptional } from 'class-validator';

export class UpdateBrandDto {
  @IsString()
//   @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  mealAddons?: any[];

  user: any;
}


// import { IsString, IsOptional } from 'class-validator';
// import { Brand } from './brand.model';

// export class UpdateBrandDto implements Brand {
//   @IsString()
//   @IsOptional()
//   name?: string;

//   @IsString()
//   @IsOptional()
//   description?: string;

//   mealAddons: any[];

//   user: any;
// }
