import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { OrderItem } from './order/order-item.entity';
import { ItemMaster } from './item/item-master.entity';
import { UsersModule } from './user/users.module';
import { OrdersModule } from './order/orders.module';
import { ItemsModule } from './item/items.module';
import { Order } from './order/order.entity';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'root',
			database: 'be-dev-r1-db',
			entities: [
				User,
				Order,
				OrderItem,
				ItemMaster,
			],
			synchronize: true,
		}),
		UsersModule,
		OrdersModule,
		ItemsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
}
