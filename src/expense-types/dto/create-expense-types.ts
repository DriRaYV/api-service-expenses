import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateExpenseTypesDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}
