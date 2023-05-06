import { Injectable } from '@nestjs/common';
import { CreateWhishListDto } from './dto/create-whish-list.dto';
import { UpdateWhishListDto } from './dto/update-whish-list.dto';

@Injectable()
export class WhishListService {
  create(createWhishListDto: CreateWhishListDto) {
    return 'This action adds a new whishList';
  }

  findAll() {
    return `This action returns all whishList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whishList`;
  }

  update(id: number, updateWhishListDto: UpdateWhishListDto) {
    return `This action updates a #${id} whishList`;
  }

  remove(id: number) {
    return `This action removes a #${id} whishList`;
  }
}
