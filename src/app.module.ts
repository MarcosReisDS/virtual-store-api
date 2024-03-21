import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entitys/user.entity';
import { Address } from './users/entitys/address.entity';
import { Wallet } from './users/entitys/wallet.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entitys/product.entity';
import { Color } from './products/entitys/color.entity';
import { Size } from './products/entitys/size.entity';
import { Cart } from './users/entitys/cart.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      port: 3306,
      username: 'dev',
      password: 'dev',
      database: 'virtual_store',
      entities: [
        User, Address, Wallet, Cart,
        Product, Color, Size
      ],
      synchronize: true,
    })
  ]
})
export class AppModule { }
