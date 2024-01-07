import { DataSource } from 'typeorm';
import { Expenses } from './expenses.entity';

export const expenseTypesProviders = [
  {
    provide: 'EXPENSES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Expenses),
    inject: ['DATA_SOURCE'],
  },
];
