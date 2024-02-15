import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "../entitys/user.entity"
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    async searchUser(query: { id: number }): Promise<any> {
        const { id } = query

        if (id) {
            return await this.usersRepository.findOne({
                where: {
                    id
                }
            })
        }

        return await this.usersRepository.find()
    }

    async saveUser(user: User): Promise<User> {
        return await this.usersRepository.save(user)
    }

    async updateUser(user_id: number, user: User): Promise<User> {
        user.id = user_id;
        return await this.usersRepository.save(user);
    }

    async removeUser(user_id: number | null): Promise<any> {
        const user = await this.usersRepository.findOne({
            where: {
                id: user_id,
            },
        })

        return await this.usersRepository.remove([user])
    }
}