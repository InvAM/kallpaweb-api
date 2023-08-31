import { EtapaContrato } from 'src/etapa-contrato/etapa-contrato.entity';
import { Materiales } from 'src/materiales/materiales.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'DetalleEtapaMaterial' })
export class DetalleEtapaMaterial {
  @PrimaryGeneratedColumn()
  IDMateriales: number;

  @ManyToOne(() => Materiales, (materiales) => materiales.detalleEtapaMaterial)
  @JoinColumn({ name: 'IDMateriales' })
  materiales: Materiales;

  @PrimaryColumn()
  IDContrato: number;

  @PrimaryColumn()
  IDEtapa: number;

  @ManyToOne(
    () => EtapaContrato,
    (detalleEtapaContrato) => detalleEtapaContrato.detalleEtapaMateriales,
  )
  @JoinColumn([
    { name: 'IDContrato', referencedColumnName: 'IDContrato' },
    { name: 'IDEtapa', referencedColumnName: 'IDEtapa' },
  ])
  etapaContrato: EtapaContrato;

  @Column()
  Cantidad_De: number;
}
