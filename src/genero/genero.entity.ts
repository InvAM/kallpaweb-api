import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Genero' })
export class Genero {
  @PrimaryColumn()
  IDGenero: number;

  @Column()
  Descripcion_G: string;
}
