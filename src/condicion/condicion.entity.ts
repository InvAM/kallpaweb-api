import { Domicilio } from 'src/domicilio/domicilio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Condicion' })
export class Condicion {
  @PrimaryGeneratedColumn()
  IDCondicion: number;

  @Column()
  Descripcion_Co: string;

  @OneToMany(() => Domicilio, (domicilio) => domicilio.condicion)
  domicilio: Domicilio[];
}
