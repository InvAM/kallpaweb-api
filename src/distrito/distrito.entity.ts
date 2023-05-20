import { Domicilio } from 'src/domicilio/domicilio.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Distrito' })
export class Distrito {
  @PrimaryColumn()
  IDDistrito: number;

  @Column()
  Nombre_Di: string;

  @OneToMany(() => Domicilio, (domicilio) => domicilio.distrito)
  domicilio: Domicilio[];
}
