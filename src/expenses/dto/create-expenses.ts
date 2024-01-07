import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateExpensesDto {
  @IsInt()
  @IsNotEmpty()
  fk_expense_type_id: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  observation?: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  date: Date;
}
