import { Module } from '@nestjs/common';
import { MonthsModule } from './months/months.module';
import { DatabaseModule } from './database/ database.module';
import { ExpenseTypesModule } from './expense-types/expense-types.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    DatabaseModule,
    MonthsModule,
    ExpenseTypesModule,
    ExpensesModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
