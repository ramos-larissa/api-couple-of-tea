import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from '../entities/user.entity';
import { Permission } from '@prisma/client';

export class CreateUserDto implements User {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  role?: Permission;
}
