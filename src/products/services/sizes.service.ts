import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Size } from '../entitys/size.entity';
import { Product } from '../entitys/product.entity';

@Injectable()
export class SizesService {
    constructor(
        @InjectRepository(Size) private sizesRepository: Repository<Size>,
        @InjectRepository(Product) private productsRepository: Repository<Product>,
    ) { }

    async searchSize(query: { id: number }): Promise<any> {
        const { id } = query

        if (id) {
            return await this.sizesRepository.findOne({
                where: {
                    id
                }
            })
        }

        return await this.sizesRepository.find()
    }

    async saveSize(sizeData: Size, productId: number): Promise<Size> {
        const product = await this.productsRepository.findOne({
            where: {
                id: productId
            }
        });

        if (!product) {
            throw new NotFoundException(`User with id ${productId} not found`);
        }

        const size = this.sizesRepository.create({ ...sizeData, product });

        return await this.sizesRepository.save(size);
    }

    async updateSize(size_id: number, size: Size): Promise<Size> {
        size.id = size_id;
        return await this.sizesRepository.save(size);
    }

    async removeSize(size_id: number | null): Promise<any> {
        const size = await this.sizesRepository.findOne({
            where: {
                id: size_id,
            },
        })

        return await this.sizesRepository.remove([size])
    }
}