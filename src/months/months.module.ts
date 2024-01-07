import { Module } from '@nestjs/common';
import { MonthsController } from './months.controller';
import { DatabaseModule } from 'src/database/ database.module';
import { monthProviders } from './entity/months.provider';
import { MonthsService } from './months.service';

@Module({
  providers: [...monthProviders, MonthsService],
  imports: [DatabaseModule],
  controllers: [MonthsController],
})
export class MonthsModule {}
