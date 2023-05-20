import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'TipoInstalacion' })
export class TipoInstalacion {
  @PrimaryColumn()
  IDTipoInst: number;

  @Column()
  Descripcion_TI: string;
}
