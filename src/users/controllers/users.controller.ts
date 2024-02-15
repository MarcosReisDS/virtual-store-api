import { Body, Controller, Get, Post, Query, Put, Delete, Param } from '@nestjs/common';
import { User } from "../entitys/user.entity"
import { UsersService } from '../services/users.service';
import { UsersDto } from '../dtos/users.dto';

@Controller({
  path: "users"
})
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get("/")
  async searchUser(
    @Query() query: { id: number }
  ) {
    return this.usersService.searchUser(query)
  }

  @Post("/")
  async saveUser(
    @Body() user_data: UsersDto
  ) {
    const user = new User(user_data);

    return this.usersService.saveUser(user);
  }

  @Put("/:id")
  async updateUser(
    @Param("id") user_id: number,
    @Body() user_data: UsersDto
  ) {
    const user = new User(user_data);

    return this.usersService.updateUser(user_id, user)
  }

  @Delete("/:id")
  async removeUser(
    @Param("id") user_id: number
  ) {
    return this.usersService.removeUser(user_id);
  }
}