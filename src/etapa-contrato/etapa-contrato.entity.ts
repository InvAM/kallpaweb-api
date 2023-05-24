import { Contrato } from 'src/contrato/contrato.entity';
import { Empleado } from 'src/empleado/empleado.entity';
import { Etapa } from 'src/etapa/etapa.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Etapa_Contrato' })
export class EtapaContrato {
  @PrimaryColumn()
  IDContrato: number;

  @PrimaryColumn()
  IDEtapa: number;

  @Column()
  DNI_Em: number;

  @Column()
  Fecha_Et: Date;

  @ManyToOne(() => Contrato, (contrato) => contrato.IDContrato)
  @JoinColumn({ name: 'IDContrato' })
  contrato: Contrato;

  @ManyToOne(() => Etapa, (etapa) => etapa.IDEtapa)
  @JoinColumn({ name: 'IDEtapa' })
  etapa: EtapaContrato;

  @ManyToOne(() => Empleado, (empleado) => empleado.DNI_Em)
  @JoinColumn({ name: 'DNI_Em' })
  empleado: Empleado;
}
