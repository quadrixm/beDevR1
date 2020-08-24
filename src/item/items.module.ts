import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemMaster } from './item-master.entity';

@Module({
	imports: [TypeOrmModule.forFeature([ItemMaster])],
	providers: [ItemsService],
	controllers: [],
})
export class ItemsModule {}
