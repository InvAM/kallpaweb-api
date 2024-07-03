import { Contrato } from 'src/contrato/contrato.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TipoInstalacion' })
export class TipoInstalacion {
  @PrimaryGeneratedColumn()
  IDTipoInst: number;

  @Column()
  Descripcion_TI: string;

  @OneToMany(() => Contrato, (contrato) => contrato.tipoinstalacion)
  contrato: Contrato[];
}
