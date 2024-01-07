import { ExpenseTypes } from 'src/expense-types/entity/expense-types.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('expenses')
export class Expenses extends BaseEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  observation: string;

  @Column({ nullable: false, type: 'int' })
  fk_expense_type_id: number;

  @Column({ nullable: false, type: 'float' })
  price: number;

  @Column({ nullable: false, type: 'date' })
  date: Date;

  @CreateDateColumn({ nullable: false, default: () => 'CURRENT_TIMESTAMP(6)' })
  creation_date: Date;

  @ManyToOne((type) => ExpenseTypes, (expense_type) => expense_type.id)
  expense_types: ExpenseTypes;
}
