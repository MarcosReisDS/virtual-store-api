import { Body, Controller, Get, Post, Query, Put, Delete, Param } from '@nestjs/common';
import { SizesDto } from '../dtos/sizes.dto';
import { Size } from '../entitys/size.entity';
import { SizesService } from '../services/sizes.service';

@Controller({
  path: "products"
})
export class SizesController {
  constructor(private readonly sizesService: SizesService) { }

  @Get("/sizes")
  async searchSize(
    @Query() query: { id: number }
  ) {
    return this.sizesService.searchSize(query)
  }

  @Post("/sizes/:productId")
  async saveSize(
    @Body() size_data: SizesDto,
    @Param('productId') productId: number
  ) {
    const size = new Size(size_data);

    return this.sizesService.saveSize(size, productId);
  }

  @Put("/sizes/:id")
  async updateUser(
    @Param("id") size_id: number,
    @Body() size_data: SizesDto
  ) {
    const size = new Size(size_data);

    return this.sizesService.updateSize(size_id, size)
  }

  @Delete("/sizes/:id")
  async removeSize(
    @Param("id") size_id: number
  ) {
    return this.sizesService.removeSize(size_id);
  }
}