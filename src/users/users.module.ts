import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitys/user.entity';
import { Wallet } from './entitys/wallet.entity';
import { Address } from './entitys/address.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { WalletsController } from './controllers/wallets.controller';
import { AddressesController } from './controllers/addresses.controller';
import { WalletsService } from './services/wallets.service';
import { AddressesService } from './services/addresses.service';
import { Cart } from './entitys/cart.entity';
import { CartController } from './controllers/cart.controller';
import { CartService } from './services/cart.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([User, Wallet, Address, Cart])],
  controllers: [UsersController, WalletsController, AddressesController, CartController],
  providers: [UsersService, WalletsService, AddressesService, CartService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
  exports: [UsersService]
})
export class UsersModule { }
