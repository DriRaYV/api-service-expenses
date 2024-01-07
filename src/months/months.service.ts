import { Inject, Injectable } from '@nestjs/common';
import { Months } from './entity/moths.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MonthsService {
  @Inject('MONTHS_REPOSITORY')
  private monthRepository: Repository<Months>;

  async findAll(): Promise<Months[]> {
    return this.monthRepository.find();
  }

  async findOne(id: number): Promise<Months> {
    return this.monthRepository.findOne({
      where: { id },
    });
  }
}
