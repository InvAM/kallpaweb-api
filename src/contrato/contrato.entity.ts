import { Categoria_Gabinete } from 'src/categoria-gabinete/categoria-gabinete.entity';
import { Cliente } from 'src/cliente/cliente.entity';
import { Empleado } from 'src/empleado/empleado.entity';
import { EtapaContrato } from 'src/etapa-contrato/etapa-contrato.entity';
import { TipoInstalacion } from 'src/tipo-instalacion/tipo-instalacion.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Contrato' })
export class Contrato {
  @PrimaryGeneratedColumn()
  IDContrato: number;

  @Column()
  Fecha_Con: Date;

  @Column()
  NumeroRadicado_Con: String;

  @Column()
  numSum: number;

  @Column()
  PuntoInstalacion_Con: number;

  @Column()
  estado: String;

  @Column()
  IDGabineteCategoria: number;

  @ManyToOne(
    () => Categoria_Gabinete,
    (categoriagabinete) => categoriagabinete.contrato,
  )
  @JoinColumn({ name: 'IDGabineteCategoria' })
  categoriagabinete: Categoria_Gabinete[];

  @Column()
  IDTipoInst: number;

  @ManyToOne(
    () => TipoInstalacion,
    (tipoinstalacion) => tipoinstalacion.contrato,
  )
  @JoinColumn({ name: 'IDTipoInst' })
  tipoinstalacion: TipoInstalacion[];

  @Column()
  DNI_cli: number;

  @OneToOne(() => Cliente, (cliente) => cliente.contrato)
  @JoinColumn({ name: 'DNI_cli' })
  cliente: Cliente;

  @Column()
  DNI_Em: number;

  @ManyToOne(() => Empleado, (empleado) => empleado.contrato)
  @JoinColumn({ name: 'DNI_Em' })
  empleado: Empleado[];

  @OneToMany(() => EtapaContrato, (etapaContrato) => etapaContrato.contrato)
  etapaContrato: EtapaContrato[];
}
