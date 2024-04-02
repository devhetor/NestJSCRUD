import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './customer.schema';
import { CreateCustomerDto } from './dto/customer.createDto';
import { UpdateCustomerDto } from './dto/customer.updateDto';

@Injectable()
export class CustomersService {
    constructor(@InjectModel(Customer.name) private carModel: Model<Customer>) { }

    async findAll(): Promise<Customer[]> {
        return await this.carModel.find().exec()
    }

    async findById(id: string): Promise<Customer> {
        return await this.carModel.findById(id)
    }

    async create(car: CreateCustomerDto): Promise<Customer> {
        return await this.carModel.create(car)
    }

    async update(car: UpdateCustomerDto): Promise<Customer> {
        return await this.carModel.findByIdAndUpdate(car)
    }

    async deleteById(carId: string): Promise<Customer> {
        return await this.carModel.findByIdAndDelete(carId)
    }
}