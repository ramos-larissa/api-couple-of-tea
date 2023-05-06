import { PartialType } from '@nestjs/mapped-types';
import { CreateSeriesListDto } from './create-series-list.dto';

export class UpdateSeriesListDto extends PartialType(CreateSeriesListDto) {}
