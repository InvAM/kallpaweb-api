import { IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateNacionalidadDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Descripcion_NA: string;
}
