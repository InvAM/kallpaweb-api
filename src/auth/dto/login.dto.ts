import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class loginDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  nombreusuario: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  contraseña: string;
}
