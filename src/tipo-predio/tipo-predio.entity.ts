import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'TipoPredio' })
export class TipoPredio {
  @PrimaryColumn()
  IDPredio: number;

  @Column()
  Descripcion_Pre: string;
}
