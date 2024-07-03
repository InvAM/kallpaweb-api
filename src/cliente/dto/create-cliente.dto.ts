import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateClienteDto {
  @IsNumber()
  DNI_cli: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Nombre_cli: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Apellido_cli: string;

  @IsNumber()
  Celular_cli: number;

  @Transform(({ value }) => value.trim())
  @IsDate()
  @MinLength(1)
  FechaNacimiento_cli: Date;
  @IsNumber()
  IDGenero: number;
  @IsNumber()
  IDNacionalidad: number;
  @IsNumber()
  IDEstadoCivil: number;
  @IsNumber()
  IDDomicilio: number;
}
