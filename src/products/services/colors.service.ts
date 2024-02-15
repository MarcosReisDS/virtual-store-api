import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from '../entitys/color.entity';
import { Product } from '../entitys/product.entity';

@Injectable()
export class ColorsService {
    constructor(
        @InjectRepository(Color) private colorsRepository: Repository<Color>,
        @InjectRepository(Product) private productsRepository: Repository<Product>,
    ) { }

    async searchColor(query: { id: number }): Promise<any> {
        const { id } = query

        if (id) {
            return await this.colorsRepository.findOne({
                where: {
                    id
                }
            })
        }

        return await this.colorsRepository.find()
    }

    async saveColor(colorData: Color, productId: number): Promise<Color> {
        const product = await this.productsRepository.findOne({
            where: {
                id: productId
            }
        });

        if (!product) {
            throw new NotFoundException(`User with id ${productId} not found`);
        }

        const color = this.colorsRepository.create({ ...colorData, product });

        return await this.colorsRepository.save(color);
    }

    async updateColor(color_id: number, color: Color): Promise<Color> {
        color.id = color_id;
        return await this.colorsRepository.save(color);
    }

    async removeColor(color_id: number | null): Promise<any> {
        const color = await this.colorsRepository.findOne({
            where: {
                id: color_id,
            },
        })

        return await this.colorsRepository.remove([color])
    }
}