import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Condicion' })
export class Condicion {
  @PrimaryColumn()
  IDCondicion: number;

  @Column()
  Descripcion_Co: string;
}
