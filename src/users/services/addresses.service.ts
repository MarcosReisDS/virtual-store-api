import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../entitys/address.entity';
import { User } from '../entitys/user.entity';

@Injectable()
export class AddressesService {
    constructor(
        @InjectRepository(Address) private addressesRepository: Repository<Address>,
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    async searchAddress(query: { id: number }): Promise<any> {
        const { id } = query

        if (id) {
            return await this.addressesRepository.findOne({
                where: {
                    id
                }
            })
        }

        return await this.addressesRepository.find()
    }

    async saveAddress(addressData: Address, userId: number): Promise<Address> {
        const user = await this.usersRepository.findOne({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new NotFoundException(`User with id ${userId} not found`);
        }

        const address = this.addressesRepository.create({ ...addressData, user });

        return await this.addressesRepository.save(address);
    }

    async updateAddress(address_id: number, address: Address): Promise<Address> {
        address.id = address_id;
        return await this.usersRepository.save(address);
    }

    async removeAddress(address_id: number | null): Promise<any> {
        const address = await this.addressesRepository.findOne({
            where: {
                id: address_id,
            },
        })

        return await this.addressesRepository.remove([address])
    }
}