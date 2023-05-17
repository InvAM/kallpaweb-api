import { Domicilio } from 'src/domicilio/domicilio.entity';
import { EstadoCivil } from 'src/estado-civil/estado-civil.entity';
import { Genero } from 'src/genero/genero.entity';
import { Nacionalidad } from 'src/nacionalidad/nacionalidad.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Usuario' })
export class Usuario {
  @PrimaryColumn()
  DNI_Usu: number;

  @Column()
  Nombre_Usu: string;

  @Column()
  Apellido_usu: string;

  @Column()
  FechaNacimiento_Usu: Date;

  @Column()
  IDGenero: number;
  @ManyToOne(() => Genero, (Genero) => Genero.usuario)
  genero: Genero;

  @Column()
  IDNacionalidad: number;
  @ManyToOne(() => Nacionalidad, (Nacionalidad) => Nacionalidad.usuario)
  nacionalidad: Nacionalidad;

  @Column()
  IDEstadoCivil: number;
  @ManyToOne(() => EstadoCivil, (EstadoCivil) => EstadoCivil.usuario)
  estadoCivil: EstadoCivil;

  @Column()
  IDDomicilio: number;
  @ManyToOne(() => Domicilio, (Domicilio) => Domicilio.usuario)
  domicilio: Domicilio;
}
