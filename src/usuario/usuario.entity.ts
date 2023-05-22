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

@Entity({ name: 'Usuario' })
export class Usuario {
  @PrimaryColumn()
  DNI_Usu: number;

  @Column()
  Nombre_Usu: string;

  @Column()
  Apellido_usu: string;

  @Column()
  Celular_Usu: number;

  @Column()
  FechaNacimiento_Usu: Date;

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
}
