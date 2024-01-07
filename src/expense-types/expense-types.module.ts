import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/ database.module';
import { expenseTypesProviders } from './entity/expense-types.provider';
import { ExpenseTypesService } from './expense-types.service';
import { ExpenseTypesController } from './expense-types.controller';

@Module({
  providers: [...expenseTypesProviders, ExpenseTypesService],
  imports: [DatabaseModule],
  controllers: [ExpenseTypesController],
})
export class ExpenseTypesModule {}
