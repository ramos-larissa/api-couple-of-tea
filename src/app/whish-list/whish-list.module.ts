import { Module } from '@nestjs/common';
import { WhishListService } from './whish-list.service';
import { WhishListController } from './whish-list.controller';

@Module({
  controllers: [WhishListController],
  providers: [WhishListService]
})
export class WhishListModule {}
