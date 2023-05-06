import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimesListDto } from './create-animes-list.dto';

export class UpdateAnimesListDto extends PartialType(CreateAnimesListDto) {}
