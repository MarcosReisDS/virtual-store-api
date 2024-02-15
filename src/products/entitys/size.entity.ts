import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SizesDto } from '../dtos/sizes.dto';
import { Product } from './product.entity';

@Entity('sizes')
export class Size {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
	size: string

    constructor(size_data: SizesDto) {
        this.size = size_data?.size;
    }

    @ManyToOne(() => Product, product => product.sizes, { onDelete: 'CASCADE' }) // Adicionado onDelete: 'CASCADE' para excluir automaticamente a carteira se o usuário for excluído
    product: Product;
}