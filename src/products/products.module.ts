import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entitys/product.entity';
import { Color } from './entitys/color.entity';
import { Size } from './entitys/size.entity';
import { ProductsController } from './controllers/products.controller';
import { ColorsController } from './controllers/colors.controller';
import { SizesController } from './controllers/sizes.controller';
import { ProductsService } from './services/products.service';
import { ColorsService } from './services/colors.service';
import { SizesService } from './services/sizes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Color, Size])],
  controllers: [ProductsController, ColorsController, SizesController],
  providers: [ProductsService, ColorsService, SizesService],
})
export class ProductsModule { }
