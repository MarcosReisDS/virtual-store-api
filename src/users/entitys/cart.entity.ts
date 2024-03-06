import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { CartDto } from '../dtos/cart.dto';

@Entity('cart')
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    image: string;

    @Column()
    name: string;

    @Column()
    price: string;

    @Column()
    quantity: string;

    @Column()
    type: string;

    @Column()
    size: string;

    @Column()
    color: string;

    constructor(cart_data: CartDto) {
        this.image = cart_data?.image;

        this.name = cart_data?.name;

        this.price = cart_data?.price;

        this.quantity = cart_data?.quantity;

        this.type = cart_data?.type;
        
        this.size = cart_data?.size;

        this.color = cart_data?.color;
    }

    @ManyToOne(() => User, user => user.wallets, { onDelete: 'CASCADE' }) // Adicionado onDelete: 'CASCADE' para excluir automaticamente a carteira se o usuário for excluído
    user: User;
}