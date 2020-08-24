import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
	constructor(
		@InjectRepository(Order)
		private repository: Repository<Order>,
	) {}

	findAll(): Promise<Order[]> {
		return this.repository.find();
	}

	findOne(id: string): Promise<Order> {
		return this.repository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.repository.delete(id);
	}
}
