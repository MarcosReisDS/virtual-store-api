import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AddressesDto } from '../dtos/addresses.dto';
import { User } from './user.entity';

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    zipcode: string;

    @Column()
    name: string;

    @Column()
    number: string;

    constructor(address_data: AddressesDto) {
        this.zipcode = address_data?.zipcode;

        this.name = address_data?.name;

        this.number = address_data?.number;
    }

    @ManyToOne(() => User, user => user.addresses, { onDelete: 'CASCADE' }) // Adicionado onDelete: 'CASCADE' para excluir automaticamente a carteira se o usuário for excluído
    user: User;
}