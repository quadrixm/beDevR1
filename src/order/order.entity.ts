import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Order {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	orderNumber: number;

	@Column()
	orderDate: string;

	@Column()
	orderDescription: string;

	@ManyToOne(type => User, user => user.orders)
	user: User;
}
