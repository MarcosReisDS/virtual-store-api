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

@Module({
  imports: [TypeOrmModule.forFeature([User, Wallet, Address])],
  controllers: [UsersController, WalletsController, AddressesController],
  providers: [UsersService, WalletsService, AddressesService],
})
export class UsersModule { }
