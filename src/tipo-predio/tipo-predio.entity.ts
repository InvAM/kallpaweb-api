import { Domicilio } from 'src/domicilio/domicilio.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'TipoPredio' })
export class TipoPredio {
  @PrimaryColumn()
  IDPredio: number;

  @Column()
  Descripcion_Pre: string;

  @OneToMany(() => Domicilio, (domicilio) => domicilio.tipopredio)
  domicilio: Domicilio[];
}
