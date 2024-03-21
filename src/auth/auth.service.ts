import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { User } from 'src/users/entitys/user.entity';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) { }

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.mail,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(mail: string, password: string): Promise<User> {
    const user = await this.userService.searchUser(mail)

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}
