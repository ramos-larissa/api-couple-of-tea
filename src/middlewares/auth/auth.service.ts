import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './model/UserPayload';
import { UserToken } from './model/UserToken';
import { UnauthorizedError } from '../../errors/UnauthorizedError';
import { User } from '@prisma/client';
import { UsersService } from '../../app/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(email: string, password: string): Promise<UserToken> {
    const user: User = await this.validateUser(email, password);

    const payload: UserPayload = {
      username: user.email,
      sub: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        username: user.email,
        name: user.name,
        sub: user.id,
        permission: user.role,
      },
    };
  }

  private async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new UnauthorizedError('Invalid email or password');
  }
}
