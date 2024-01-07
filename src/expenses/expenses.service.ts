import { Inject, Injectable } from '@nestjs/common';
import { Expenses } from './entity/expenses.entity';
import { Repository } from 'typeorm';
import { CreateExpensesDto } from './dto/create-expenses';

@Injectable()
export class ExpensesService {
  @Inject('EXPENSES_REPOSITORY')
  private expensesRepository: Repository<Expenses>;

  async findAll(): Promise<Expenses[]> {
    return this.expensesRepository.query(
      `SELECT s.id, s.price, s.name, s.observation,s.date, t.name AS type
       FROM expenses s 
       INNER JOIN expense_types t 
       ON s.fk_expense_type_id = t.id 
       ORDER BY id ASC 
       `,
    );
  }

  async findOne(id: number): Promise<Expenses> {
    return this.expensesRepository.query(
      `SELECT s.id, s.price, s.name, s.observation,s.date, t.name AS type
       FROM expenses s 
       INNER JOIN expense_types t 
       ON s.fk_expense_type_id = t.id 
       WHERE s.id = $1
       `,
      [id],
    );
  }
  async metrics(): Promise<Expenses> {
    return this.expensesRepository.query(
      `SELECT SUM(e.price) AS remains, 
      (SELECT SUM(price) FROM expenses where price < 0) AS expenses,
      (SELECT SUM(price) FROM expenses where price > 0) AS entries 
      FROM expenses e
       `,
    );
  }
  async create(createExpensesDto: CreateExpensesDto): Promise<Expenses> {
    return this.expensesRepository.save(createExpensesDto);
  }
}
