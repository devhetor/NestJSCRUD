import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './car.schema';
import { CreateCarDto } from './dto/car.createDto';
import { UpdateCarDto } from './dto/car.updateDto';

@Injectable()
export class CarsService {
    constructor(@InjectModel(Car.name) private carModel: Model<Car>) { }

    async findAll(): Promise<Car[]> {
        return await this.carModel.find().exec()
    }

    async findById(id: string): Promise<Car> {
        return await this.carModel.findById(id)
    }

    async create(car: CreateCarDto): Promise<Car> {
        return await this.carModel.create(car)
    }

    async update(car: UpdateCarDto): Promise<Car> {
        return await this.carModel.findByIdAndUpdate(car)
    }

    async deleteById(carId: string): Promise<Car> {
        return await this.carModel.findByIdAndDelete(carId)
    }
}