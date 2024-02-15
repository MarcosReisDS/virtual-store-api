import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from '../entitys/wallet.entity';
import { User } from '../entitys/user.entity';

@Injectable()
export class WalletsService {
    constructor(
        @InjectRepository(Wallet) private walletsRepository: Repository<Wallet>,
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    async searchWallet(query: { id: number }): Promise<any> {
        const { id } = query

        if (id) {
            return await this.walletsRepository.findOne({
                where: {
                    id
                }
            })
        }

        return await this.walletsRepository.find()
    }

    async saveWallet(walletData: Wallet, userId: number): Promise<Wallet> {
        const user = await this.usersRepository.findOne({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new NotFoundException(`User with id ${userId} not found`);
        }

        const wallet = this.walletsRepository.create({ ...walletData, user });

        return await this.walletsRepository.save(wallet);
    }

    async updateWallet(wallet_id: number, wallet: Wallet): Promise<Wallet> {
        wallet.id = wallet_id;
        return await this.usersRepository.save(wallet);
    }

    async removeWallet(wallet_id: number | null): Promise<any> {
        const wallet = await this.walletsRepository.findOne({
            where: {
                id: wallet_id,
            },
        })

        return await this.walletsRepository.remove([wallet])
    }
}