import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { WalletsDto } from '../dtos/wallets.dto';
import { User } from './user.entity';

@Entity('wallets')
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: string;

    @Column()
    name: string;

    @Column()
    security: string;

    @Column()
    date: string;

    constructor(wallet_data: WalletsDto) {
        this.number = wallet_data?.number;

        this.name = wallet_data?.name;

        this.security = wallet_data?.security;

        this.date = wallet_data?.date;
    }

    @ManyToOne(() => User, user => user.wallets, { onDelete: 'CASCADE' }) // Adicionado onDelete: 'CASCADE' para excluir automaticamente a carteira se o usuário for excluído
    user: User;
}