import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  validate(mail: string, password: string) {
    return this.authService.validateUser(mail, password);
  }
}
