import { Contrato } from 'src/contrato/contrato.entity';
import { DetalleEtapaMaterial } from 'src/detalle-etapa-material/detalle-etapa-material.entity';
import { Empleado } from 'src/empleado/empleado.entity';
import { Etapa } from 'src/etapa/etapa.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

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

  @ManyToOne(() => Contrato, (contrato) => contrato.etapaContrato)
  @JoinColumn({ name: 'IDContrato' })
  contrato: Contrato;

  @ManyToOne(() => Etapa, (etapa) => etapa.etapaContrato)
  @JoinColumn({ name: 'IDEtapa' })
  etapa: EtapaContrato;

  @ManyToOne(() => Empleado, (empleado) => empleado.etapaContrato)
  @JoinColumn({ name: 'DNI_Em' })
  empleado: Empleado;

  @OneToMany(
    () => DetalleEtapaMaterial,
    (detalleEtapMaterial) => detalleEtapMaterial.etapaContrato,
  )
  detalleEtapaMateriales: DetalleEtapaMaterial[];
}
