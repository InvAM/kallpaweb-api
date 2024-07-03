import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class CreateCategoriaEmpleadoDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Cargo_CE: string;
}
