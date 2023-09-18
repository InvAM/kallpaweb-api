import { Transform } from 'class-transformer';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateCredencialesEmpleadoDto {
  @IsNumber()
  DNI_Em: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  nombreusuario: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  contraseña: string;

  @IsNumber()
  IDCategoria: number;
}
