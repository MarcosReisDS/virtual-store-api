import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAdminException extends HttpException {
  constructor() {
    super('User is not admin', HttpStatus.CONFLICT);
  }
}
