import { PartialType } from '@nestjs/mapped-types';
import { CreateWishlistWeddingDto } from './create-wishlist-wedding.dto';

export class UpdateWishlistWeddingDto extends PartialType(CreateWishlistWeddingDto) {}
