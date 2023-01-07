import { IsString, IsEnum, IsOptional,IsEmail } from 'class-validator';
import { Roles } from '../auth/roles.enum';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEnum(Roles)
  @IsOptional()
  role?: Roles;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEnum(Roles)
  @IsOptional()
  role?: Roles;
}

export class SignInUserDto {
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
  }
  
  export class SignUpUserDto {
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
  
    @IsString()
    name: string;
  }