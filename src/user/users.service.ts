import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private repository: Repository<User>,
	) {}

	findAll(): Promise<User[]> {
		return this.repository.find();
	}

	findOne(id: string): Promise<User> {
		return this.repository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.repository.delete(id);
	}
}
