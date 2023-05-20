import { Domicilio } from 'src/domicilio/domicilio.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Condicion' })
export class Condicion {
  @PrimaryColumn()
  IDCondicion: number;

  @Column()
  Descripcion_Co: string;

  @OneToMany(() => Domicilio, (domicilio) => domicilio.condicion)
  domicilio: Domicilio[];
}
