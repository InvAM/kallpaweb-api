import { IsNumber } from 'class-validator';

export class CreateDetalleETapaMaterialDto {
  @IsNumber()
  IDMateriales: number;
  @IsNumber()
  IDContrato: number;
  @IsNumber()
  IDEtapa: number;
  @IsNumber()
  Cantidad_De: number;
}
