import { IsNumber, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTipoInstalacionDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Descripcion_TI: string;
}
