import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailExistsException extends HttpException {
  constructor() {
    super('This email already exists', HttpStatus.CONFLICT);
  }
}
