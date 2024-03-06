import { Body, Controller, Get, Post, Query, Put, Delete, Param } from '@nestjs/common';
import { CartDto } from '../dtos/cart.dto';
import { Cart } from '../entitys/cart.entity';
import { CartService } from '../services/cart.service';

@Controller({
  path: "users"
})
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Get("/cart")
  async searchCart(
    @Query() query: { id: number }
  ) {
    return this.cartService.searchCart(query)
  }

  @Post("/cart/:userId")
  async saveWallet(
    @Body() cart_data: CartDto,
    @Param('userId') userId: number
  ) {
    const cart = new Cart(cart_data);

    return this.cartService.saveCart(cart, userId);
  }

  @Put("/cart/:id")
  async updateUser(
    @Param("id") cart_id: number,
    @Body() cart_data: CartDto
  ) {
    const cart = new Cart(cart_data);

    return this.cartService.updateCart(cart_id, cart)
  }

  @Delete("/cart/:id")
  async removeCart(
    @Param("id") cart_id: number
  ) {
    return this.cartService.removeCart(cart_id);
  }
}