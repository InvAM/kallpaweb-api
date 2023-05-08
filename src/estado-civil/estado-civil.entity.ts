import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'EstadoCivil' })
export class EstadoCivil {
  @PrimaryColumn()
  IDEstadoCivil: number;

  @Column()
  Descripcion_Es: string;
}
