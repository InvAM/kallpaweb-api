import { IsNumber, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateDomicilioDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Direccion_Dom: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Interior_Dom: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Piso_Dom: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Nomb_Malla_Dom: string;

  @IsNumber()
  IDCondicion: number;

  @IsNumber()
  IDEstrato: number;

  @IsNumber()
  IDPredio: number;

  @IsNumber()
  IDDistrito: number;
}
