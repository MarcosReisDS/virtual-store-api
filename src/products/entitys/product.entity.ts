import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { ProductsDto } from '../dtos/products.dto';
import { Size } from './size.entity';
import { Color } from './color.entity';

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  quantity: string;

  @Column()
  type: string;

  constructor(product_data: ProductsDto) {
    this.image = product_data?.image;

    this.name = product_data?.name;

    this.description = product_data?.description;

    this.price = product_data?.price;

    this.quantity = product_data?.quantity;

    this.type = product_data?.type;
  }

  @ManyToMany(() => Color, { cascade: true })
  @JoinTable()
  colors: Color[];

  @ManyToMany(() => Size, { cascade: true })
  @JoinTable()
  sizes: Size[];
}