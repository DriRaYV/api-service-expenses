import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/ database.module';
import { expenseTypesProviders } from './entity/expenses.provider';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';

@Module({
  providers: [...expenseTypesProviders, ExpensesService],
  imports: [DatabaseModule],
  controllers: [ExpensesController],
})
export class ExpensesModule {}
