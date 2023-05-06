import { Injectable } from '@nestjs/common';
import { CreateAnimesListDto } from './dto/create-animes-list.dto';
import { UpdateAnimesListDto } from './dto/update-animes-list.dto';

@Injectable()
export class AnimesListService {
  create(createAnimesListDto: CreateAnimesListDto) {
    return 'This action adds a new animesList';
  }

  findAll() {
    return `This action returns all animesList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animesList`;
  }

  update(id: number, updateAnimesListDto: UpdateAnimesListDto) {
    return `This action updates a #${id} animesList`;
  }

  remove(id: number) {
    return `This action removes a #${id} animesList`;
  }
}
