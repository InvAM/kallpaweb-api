import { IsDateString, IsNumber, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateContratoDto {
  @IsNumber()
  IDContrato: number;

  @Transform(({ value }) => value.trim())
  @IsDateString()
  @MinLength(1)
  Fecha_Con: Date;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  NumeroRadicado_Con: String;

  @IsNumber()
  numSum: number;

  @IsNumber()
  PuntoInstalacion_Con: number;

  @IsNumber()
  IDGabineteCategoria: number;

  @IsNumber()
  IDTipoInst: number;
  @IsNumber()
  DNI_cli: number;

  @IsNumber()
  DNI_Em: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  estado: String;
}
