import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Estrato' })
export class Estrato {
  @PrimaryColumn()
  IDEstrato: number;

  @Column()
  Descripcion_Estrato: string;
}
