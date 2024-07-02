import { IsDecimal, IsNumber, IsString } from "class-validator";

export class CreateMarcacionDto {
    @IsString()
    DNI_Em: number;
  
    @IsDecimal()
    Latitud: number;
  
    @IsDecimal()
    Longitud: number;
  
    @IsString()
    Fecha_Marcacion: string;
  
    @IsString()
    Inicio_Marcacion: string;
  
    @IsString()
    Fin_Marcacion: string;
  
    @IsNumber()
    IDTipo_Marcacion: number;
  }