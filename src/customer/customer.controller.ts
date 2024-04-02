import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './customer.service';
import { Customer } from './customer.schema';
import { CreateCustomerDto } from './dto/customer.createDto';
import { UpdateCustomerDto } from './dto/customer.updateDto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) { }
    
    @Get()
    async findAll(): Promise<Customer[]> {
        return await this.customersService.findAll();
    }

    @Get(':id')
    async findById(@Param() params: any): Promise<Customer> {
        return await this.customersService.findById(params.id)
    }

    @Post()
    async create(@Body() dto: CreateCustomerDto): Promise<Customer> {
        return await this.customersService.create(dto)
    }

    @Put()
    async update(@Body() dto: UpdateCustomerDto): Promise<Customer> {
        return await this.customersService.update(dto)
    }

    @Delete(':id')
    async deleteByid(@Param() params: any): Promise<Customer> {
        return await this.customersService.deleteById(params.id)
    }
}