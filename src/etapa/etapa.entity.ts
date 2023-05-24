import { EtapaContrato } from 'src/etapa-contrato/etapa-contrato.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Etapa' })
export class Etapa {
  @PrimaryColumn()
  IDEtapa: number;

  @Column()
  Descripcion_Et: string;

  @OneToMany(() => EtapaContrato, (etapaContrato) => etapaContrato.etapa)
  etapaContrato: EtapaContrato[];
}
