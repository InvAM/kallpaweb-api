import { Domicilio } from 'src/domicilio/domicilio.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Estrato' })
export class Estrato {
  @PrimaryColumn()
  IDEstrato: number;

  @Column()
  Descripcion_Estrato: string;

  @OneToMany(() => Domicilio, (domicilio) => domicilio.estrato)
  domicilio: Domicilio[];
}
