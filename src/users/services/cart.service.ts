import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entitys/user.entity';
import { Cart } from '../entitys/cart.entity';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Cart) private cartRepository: Repository<Cart>,
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    async searchCart(query: { id: number }): Promise<any> {
        const { id } = query

        if (id) {
            return await this.cartRepository.findOne({
                where: {
                    id
                }
            })
        }

        return await this.cartRepository.find()
    }

    async saveCart(cartData: Cart, userId: number): Promise<Cart> {
        const user = await this.usersRepository.findOne({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new NotFoundException(`User with id ${userId} not found`);
        }

        const cart = this.cartRepository.create({ ...cartData, user });

        return await this.cartRepository.save(cart);
    }

    async updateCart(cart_id: number, cart: Cart): Promise<Cart> {
        cart.id = cart_id;
        return await this.usersRepository.save(cart);
    }

    async removeCart(cart_id: number | null): Promise<any> {
        const cart = await this.cartRepository.findOne({
            where: {
                id: cart_id,
            },
        })

        return await this.cartRepository.remove([cart])
    }
}