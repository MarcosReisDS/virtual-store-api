import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entitys/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productsRepository: Repository<Product>,
    ) { }

    async searchProduct(query: { id: number }): Promise<any> {
        const { id } = query

        if (id) {
            return await this.productsRepository.findOne({
                where: {
                    id
                }
            })
        }

        return await this.productsRepository.find()
    }

    async saveProduct(product: Product): Promise<Product> {
        return await this.productsRepository.save(product)
    }

    async updateProduct(product_id: number, product: Product): Promise<Product> {
        product.id = product_id;
        return await this.productsRepository.save(product);
    }

    async removeProduct(product_id: number | null): Promise<any> {
        const product = await this.productsRepository.findOne({
            where: {
                id: product_id,
            },
        })

        return await this.productsRepository.remove([product])
    }
}