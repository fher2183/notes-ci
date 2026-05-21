import { IsOptional, IsString } from 'class-validator';

export class QueryNoteDto {
  @IsOptional()
  @IsString()
  studentId?: string;

  @IsOptional()
  @IsString()
  subject?: string;
}
