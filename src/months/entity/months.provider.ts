import { DataSource } from 'typeorm';
import { Months } from './moths.entity';

export const monthProviders = [
  {
    provide: 'MONTHS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Months),
    inject: ['DATA_SOURCE'],
  },
];
