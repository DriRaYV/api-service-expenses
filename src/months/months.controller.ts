import { Controller, Get, Param } from '@nestjs/common';
import { Months } from './entity/moths.entity';
import { MonthsService } from './months.service';

@Controller('months')
export class MonthsController {
  constructor(private readonly monthService: MonthsService) {}
  @Get()
  async findAll(): Promise<Months[]> {
    return this.monthService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Months> {
    return this.monthService.findOne(parseInt(id));
  }
}
