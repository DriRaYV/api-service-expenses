import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Expenses } from './entity/expenses.entity';
import { ExpensesService } from './expenses.service';
import { CreateExpensesDto } from './dto/create-expenses';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}
  @Get()
  async findAll(): Promise<Expenses[]> {
    return this.expensesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Expenses> {
    return this.expensesService.findOne(parseInt(id));
  }

  @Post()
  async create(
    @Body() createExpenseTypesDto: CreateExpensesDto,
  ): Promise<Expenses> {
    return this.expensesService.create(createExpenseTypesDto);
  }
}
