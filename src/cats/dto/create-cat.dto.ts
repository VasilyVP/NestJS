import { IsInt, IsString, Min, Max } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(18)
  @Max(120)
  age: number;

  @IsString()
  breed: string;
}
