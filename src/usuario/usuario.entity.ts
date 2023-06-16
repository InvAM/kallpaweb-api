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
export class Usuario {
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

  @ManyToOne(() => Genero, (genero) => genero.usuario)
  @JoinColumn({ name: 'IDGenero' })
  genero: Genero;

  @Column()
  IDNacionalidad: number;

  @ManyToOne(() => Nacionalidad, (nacionalidad) => nacionalidad.usuario)
  @JoinColumn({ name: 'IDNacionalidad' })
  nacionalidad: Nacionalidad;

  @Column()
  IDEstadoCivil: number;

  @ManyToOne(() => EstadoCivil, (estadocivil) => estadocivil.usuario)
  @JoinColumn({ name: 'IDEstadoCivil' })
  estadocivil: EstadoCivil;

  @Column()
  IDDomicilio: number;

  @OneToOne(() => Domicilio, (domicilio) => domicilio.usuario)
  @JoinColumn({ name: 'IDDomicilio' })
  domicilio: Domicilio;

  @OneToOne(() => Contrato, (contrato) => contrato.usuario)
  contrato: Contrato;
}
