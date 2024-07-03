import { Transform } from 'class-transformer';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateCredencialesEmpleadoDto {
  DNI_Em: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  nombreusuario: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  contraseña: string;
}
