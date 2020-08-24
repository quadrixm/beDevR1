import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Order])],
	providers: [OrdersService],
	controllers: [],
})
export class OrdersModule {}
