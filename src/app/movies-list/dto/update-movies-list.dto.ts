import { PartialType } from '@nestjs/mapped-types';
import { CreateMoviesListDto } from './create-movies-list.dto';

export class UpdateMoviesListDto extends PartialType(CreateMoviesListDto) {}
