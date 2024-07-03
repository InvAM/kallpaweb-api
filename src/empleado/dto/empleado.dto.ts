import { IsNumber, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateEmpleadoDto {
  @IsNumber()
  DNI_Em: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Nombre_Em: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Apellido_Em: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Celular_Em: string;

  @IsNumber()
  IDCategoria: number;
}
