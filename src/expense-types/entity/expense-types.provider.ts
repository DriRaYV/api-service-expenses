import { DataSource } from 'typeorm';
import { ExpenseTypes } from './expense-types.entity';

export const expenseTypesProviders = [
  {
    provide: 'EXPENSE_TYPES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ExpenseTypes),
    inject: ['DATA_SOURCE'],
  },
];
