import { Body, Controller, Get, Post, Query, Put, Delete, Param } from '@nestjs/common';
import { AddressesDto } from '../dtos/addresses.dto';
import { Address } from '../entitys/address.entity';
import { AddressesService } from '../services/addresses.service';

@Controller({
  path: "users"
})
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) { }

  @Get("/addresses")
  async searchAddress(
    @Query() query: { id: number }
  ) {
    return this.addressesService.searchAddress(query)
  }

  @Post("/addresses/:userId")
  async saveAddress(
    @Body() address_data: AddressesDto,
    @Param('userId') userId: number
  ) {
    const address = new Address(address_data);

    return this.addressesService.saveAddress(address, userId);
  }

  @Put("/addresses/:id")
  async updateUser(
    @Param("id") address_id: number,
    @Body() address_data: AddressesDto
  ) {
    const address = new Address(address_data);

    return this.addressesService.updateAddress(address_id, address)
  }

  @Delete("/addresses/:id")
  async removeAddress(
    @Param("id") address_id: number
  ) {
    return this.addressesService.removeAddress(address_id);
  }
}