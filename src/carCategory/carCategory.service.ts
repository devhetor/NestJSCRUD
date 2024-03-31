import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CarCategory } from './carCategory.schema';
import { CreateCarCategoryDto } from './dto/carCategory.createDto';
import { UpdateCarCategoryDto } from './dto/carCategory.updateDto';

@Injectable()
export class CarCategoriesService {
    constructor(@InjectModel(CarCategory.name) private carModel: Model<CarCategory>) { }

    async findAll(): Promise<CarCategory[]> {
        return await this.carModel.find().exec()
    }

    async findById(id: string): Promise<CarCategory> {
        return await this.carModel.findById(id)
    }

    async create(car: CreateCarCategoryDto): Promise<CarCategory> {
        return await this.carModel.create(car)
    }

    async update(car: UpdateCarCategoryDto): Promise<CarCategory> {
        return await this.carModel.findByIdAndUpdate(car)
    }

    async deleteById(carId: string): Promise<CarCategory> {
        return await this.carModel.findByIdAndDelete(carId)
    }
}