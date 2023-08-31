import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class CreateEstadoCivilDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Descripcion_Es: string;
}
