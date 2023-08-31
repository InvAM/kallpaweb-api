import { IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateDistritoDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(2)
  Nombre_Di: string;
}
