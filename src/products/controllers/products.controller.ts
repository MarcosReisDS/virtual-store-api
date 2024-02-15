import { Body, Controller, Get, Post, Query, Put, Delete, Param } from '@nestjs/common';
import { ProductsDto } from '../dtos/products.dto';
import { Product } from '../entitys/product.entity';
import { ProductsService } from '../services/products.service';

@Controller({
  path: "products"
})
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get("/")
  async searchProduct(
    @Query() query: { id: number }
  ) {
    return this.productsService.searchProduct(query)
  }

  @Post("/")
  async saveProduct(
    @Body() product_data: ProductsDto
  ) {
    const product = new Product(product_data);

    return this.productsService.saveProduct(product);
  }

  @Put("/:id")
  async updateUser(
    @Param("id") product_id: number,
    @Body() product_data: ProductsDto
  ) {
    const product = new Product(product_data);

    return this.productsService.updateProduct(product_id, product)
  }

  @Delete("/:id")
  async removeProduct(
    @Param("id") product_id: number
  ) {
    return this.productsService.removeProduct(product_id);
  }
}