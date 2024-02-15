import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ColorsDto } from '../dtos/colors.dto';
import { Product } from './product.entity';

@Entity('colors')
export class Color {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    value: string;

    constructor(color_data: ColorsDto) {
        this.name = color_data?.name;

        this.value = color_data?.value;
    }

    @ManyToOne(() => Product, product => product.colors, { onDelete: 'CASCADE' }) // Adicionado onDelete: 'CASCADE' para excluir automaticamente a carteira se o usuário for excluído
    product: Product;
}