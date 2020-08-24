import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';
import { ItemMaster } from '../item/item-master.entity';

@Entity()
export class OrderItem {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	orderNumber: number;

	@Column()
	orderItem: string;

	@Column()
	orderDescription: string;

	@Column()
	orderNo: string;

	@OneToOne(type => Order)
	@JoinColumn()
	order: Order;

	@OneToOne(type => ItemMaster)
	@JoinColumn()
	item: ItemMaster;
}
