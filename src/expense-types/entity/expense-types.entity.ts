import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('expense_types')
export class ExpenseTypes extends BaseEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  name: string;
}
