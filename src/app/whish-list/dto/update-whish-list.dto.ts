import { PartialType } from '@nestjs/mapped-types';
import { CreateWhishListDto } from './create-whish-list.dto';

export class UpdateWhishListDto extends PartialType(CreateWhishListDto) {}
