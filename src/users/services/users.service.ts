import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "../entitys/user.entity"
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { EmailExistsException } from '../errors/email-exists.exception';
import { UserAdminException } from '../errors/user-admin.exception';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    async searchUser(mail: string, admin?: boolean): Promise<any> {

        if (mail) {
            return await this.usersRepository.findOne({
                where: {
                    mail,
                }
            })
        }
        
        if (admin == true) {
            return await this.usersRepository.find()
        } else {
            throw new UserAdminException();
        }

    }

    async saveUser(user: User): Promise<User> {

        const mailTeste = await this.usersRepository.findOne({
            where: {
                mail: user.mail
            }
        })

        const data = {
            ...user,
            password: await bcrypt.hash(user.password, 10)
        }

        if (data?.mail == mailTeste?.mail) {
            throw new EmailExistsException();
        }

        return await this.usersRepository.save({
            ...data,
            password: undefined
        })
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