import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('months')
export class Months extends BaseEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 60 })
  name: string;
}
