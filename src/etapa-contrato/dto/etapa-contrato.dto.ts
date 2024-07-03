import { IsDate, IsDateString, IsNumber } from 'class-validator';

export class CreateEtapaContratoDto {
  @IsNumber()
  IDContrato: number;
  @IsNumber()
  IDEtapa: number;
  @IsNumber()
  DNI_Em: number;

  @IsDateString()
  Fecha_Et: Date;
}
