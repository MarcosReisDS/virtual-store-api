import { Body, Controller, Get, Post, Query, Put, Delete, Param } from '@nestjs/common';
import { ColorsDto } from '../dtos/colors.dto';
import { Color } from '../entitys/color.entity';
import { ColorsService } from '../services/colors.service';

@Controller({
  path: "products"
})
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) { }

  @Get("/colors")
  async searchColor(
    @Query() query: { id: number }
  ) {
    return this.colorsService.searchColor(query)
  }

  @Post("/colors/:productId")
  async saveColor(
    @Body() color_data: ColorsDto,
    @Param('productId') productId: number
  ) {
    const color = new Color(color_data);

    return this.colorsService.saveColor(color, productId);
  }

  @Put("/colors/:id")
  async updateUser(
    @Param("id") color_id: number,
    @Body() color_data: ColorsDto
  ) {
    const color = new Color(color_data);

    return this.colorsService.updateColor(color_id, color)
  }

  @Delete("/colors/:id")
  async removeColor(
    @Param("id") color_id: number
  ) {
    return this.colorsService.removeColor(color_id);
  }
}