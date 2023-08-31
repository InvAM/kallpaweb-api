import { Transform } from 'class-transformer';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class registerDto {
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
}
