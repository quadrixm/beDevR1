import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemMaster } from './item-master.entity';

@Injectable()
export class ItemsService {
	constructor(
		@InjectRepository(ItemMaster)
		private repository: Repository<ItemMaster>,
	) {}

	findAll(): Promise<ItemMaster[]> {
		return this.repository.find();
	}

	findOne(id: string): Promise<ItemMaster> {
		return this.repository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.repository.delete(id);
	}
}
