import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Etapa' })
export class Etapa {
  @PrimaryColumn()
  IDEtapa: number;

  @Column()
  Descripcion_Et: string;
}
