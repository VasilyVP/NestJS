import { IsString } from 'class-validator';

export class SearchUserDto {
  @IsString()
  search: string;
}
