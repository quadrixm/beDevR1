import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../order/order.entity';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	userName: string;

	@Column()
	password: string;

	@Column()
	fullName: string;

	@Column()
	phoneNumber: string;

	@Column()
	emailId: string;

	@OneToMany(type => Order, order => order.user)
	orders: Order[];
}
