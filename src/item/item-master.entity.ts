import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ItemMaster {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	itemName: string;

	@Column()
	itemDescription: string;
}
