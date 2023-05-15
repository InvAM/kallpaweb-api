import { EstadoCivil } from 'src/estado-civil/estado-civil.entity';
import { Genero } from 'src/genero/genero.entity';
import { Nacionalidad } from 'src/nacionalidad/nacionalidad.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Usuario' })
export class Empleado {
  @PrimaryColumn()
  DNI_Usu: number;

  @Column()
  Nombre_Usu: string;

  @Column()
  Apellido_Usu: string;

  @Column()
  Celular: number;

  @Column()
  FechaNacimiento_Usu: Date;

  @ManyToOne(() => Genero)
  IDGenero: Genero;

  @ManyToOne(() => Nacionalidad)
  IDNacionalidad: Nacionalidad;

  @ManyToOne(() => EstadoCivil)
  IDEstadoCivil: EstadoCivil;

  //@OneToOne(() => Domicilio)
  //IDDomicilio: Domicilio;
}
