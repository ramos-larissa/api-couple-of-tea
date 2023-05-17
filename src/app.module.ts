import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';

import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './middlewares/auth/jwt-auth.guard';

import { AuthController } from './middlewares/auth/auth.controller';
import { AuthModule } from './middlewares/auth/auth.module';

import { UsersModule } from './app/users/users.module';
import { CouponsModule } from './app/coupons/coupons.module';
import { WishlistWeddingModule } from './app/wishlist-wedding/wishlist-wedding.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    CouponsModule,
    WishlistWeddingModule,
  ],
  controllers: [AuthController, AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
