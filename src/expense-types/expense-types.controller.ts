import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExpenseTypes } from './entity/expense-types.entity';
import { ExpenseTypesService } from './expense-types.service';
import { CreateExpenseTypesDto } from './dto/create-expense-types';

@Controller('expense-types')
export class ExpenseTypesController {
  constructor(private readonly expenseTypesService: ExpenseTypesService) {}
  @Get()
  async findAll(): Promise<ExpenseTypes[]> {
    return this.expenseTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ExpenseTypes> {
    return this.expenseTypesService.findOne(parseInt(id));
  }

  @Post()
  async create(
    @Body() createExpenseTypesDto: CreateExpenseTypesDto,
  ): Promise<ExpenseTypes> {
    return this.expenseTypesService.create(createExpenseTypesDto);
  }
}
