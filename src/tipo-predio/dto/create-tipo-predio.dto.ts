import { Transform } from 'class-transformer';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTipoPredioDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Descripcion_Pre: string;
}
