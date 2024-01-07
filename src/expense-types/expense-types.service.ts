import { Inject, Injectable } from '@nestjs/common';
import { ExpenseTypes } from './entity/expense-types.entity';
import { Repository } from 'typeorm';
import { CreateExpenseTypesDto } from './dto/create-expense-types';

@Injectable()
export class ExpenseTypesService {
  @Inject('EXPENSE_TYPES_REPOSITORY')
  private expenseTypesRepository: Repository<ExpenseTypes>;

  async findAll(): Promise<ExpenseTypes[]> {
    return this.expenseTypesRepository.find();
  }

  async findOne(id: number): Promise<ExpenseTypes> {
    return this.expenseTypesRepository.findOne({
      where: { id },
    });
  }

  async create(
    createExpenseTypesDto: CreateExpenseTypesDto,
  ): Promise<ExpenseTypes> {
    return this.expenseTypesRepository.save(createExpenseTypesDto);
  }
}
