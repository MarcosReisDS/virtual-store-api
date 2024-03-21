import { Request } from 'express';
import { User } from 'src/users/entitys/user.entity';

export interface AuthRequest extends Request {
  user: User;
}
