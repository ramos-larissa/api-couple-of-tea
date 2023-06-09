import { Request } from 'express';
import { User } from '../../../app/users/entities/user.entity';

export interface AuthRequest extends Request {
  principal: User;
}