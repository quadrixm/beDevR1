import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
	private readonly users: User[];

	constructor(
		@InjectRepository(User)
		private repository: Repository<User>,
	) {
		this.users = [
			{
				id: 1,
				userName: 'john',
				fullName: 'John',
				emailId: 'john@example.com',
				password: '23984',
			},
			{
				id: 2,
				userName: 'chris',
				fullName: 'Chris',
				emailId: 'chris@example.com',
				password: '3235',
			},
			{
				id: 3,
				userName: 'maria',
				fullName: 'Maria',
				emailId: 'maria@example.com',
				password: '4324',
			},
		];
	}

	findAll(): Promise<User[]> {
		return this.repository.find();
	}

	// findOne(id: string): Promise<User> {
	// 	return this.repository.findOne(id);
	// }

	async findOne(userName: string): Promise<User | undefined> {
		return this.users.find(user => user.userName === userName);
	}

	async remove(id: string): Promise<void> {
		await this.repository.delete(id);
	}
}
