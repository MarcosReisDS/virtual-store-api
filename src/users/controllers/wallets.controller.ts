import { Body, Controller, Get, Post, Query, Put, Delete, Param } from '@nestjs/common';
import { WalletsService } from '../services/wallets.service';
import { Wallet } from '../entitys/wallet.entity';
import { WalletsDto } from '../dtos/wallets.dto';

@Controller({
  path: "users"
})
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) { }

  @Get("/wallets")
  async searchWallet(
    @Query() query: { id: number }
  ) {
    return this.walletsService.searchWallet(query)
  }

  @Post("/wallets/:userId")
  async saveWallet(
    @Body() wallet_data: WalletsDto,
    @Param('userId') userId: number
  ) {
    const wallet = new Wallet(wallet_data);

    return this.walletsService.saveWallet(wallet, userId);
  }

  @Put("/wallets/:id")
  async updateUser(
    @Param("id") wallet_id: number,
    @Body() wallet_data: WalletsDto
  ) {
    const wallet = new Wallet(wallet_data);

    return this.walletsService.updateWallet(wallet_id, wallet)
  }

  @Delete("/wallets/:id")
  async removeWallet(
    @Param("id") wallet_id: number
  ) {
    return this.walletsService.removeWallet(wallet_id);
  }
}