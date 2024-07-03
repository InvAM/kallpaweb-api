import { Genero } from 'src/genero/genero.entity';
import { Nacionalidad } from 'src/nacionalidad/nacionalidad.entity';
import { EstadoCivil } from 'src/estado-civil/estado-civil.entity';
import { Domicilio } from 'src/domicilio/domicilio.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Contrato } from 'src/contrato/contrato.entity';

@Entity({ name: 'Cliente' })
export class Cliente {
  @PrimaryColumn()
  DNI_cli: number;

  @Column()
  Nombre_cli: string;

  @Column()
  Apellido_cli: string;

  @Column()
  Celular_cli: number;

  @Column()
  FechaNacimiento_cli: Date;

  @Column()
  IDGenero: number;

  @ManyToOne(() => Genero, (genero) => genero.cliente)
  @JoinColumn({ name: 'IDGenero' })
  genero: Genero;

  @Column()
  IDNacionalidad: number;

  @ManyToOne(() => Nacionalidad, (nacionalidad) => nacionalidad.cliente)
  @JoinColumn({ name: 'IDNacionalidad' })
  nacionalidad: Nacionalidad;

  @Column()
  IDEstadoCivil: number;

  @ManyToOne(() => EstadoCivil, (estadocivil) => estadocivil.cliente)
  @JoinColumn({ name: 'IDEstadoCivil' })
  estadocivil: EstadoCivil;

  @Column()
  IDDomicilio: number;

  @OneToOne(() => Domicilio, (domicilio) => domicilio.cliente)
  @JoinColumn({ name: 'IDDomicilio' })
  domicilio: Domicilio;

  @OneToOne(() => Contrato, (contrato) => contrato.cliente)
  contrato: Contrato;
}
