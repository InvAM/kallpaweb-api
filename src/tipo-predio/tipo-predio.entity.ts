import { Domicilio } from 'src/domicilio/domicilio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TipoPredio' })
export class TipoPredio {
  @PrimaryGeneratedColumn()
  IDPredio: number;

  @Column()
  Descripcion_Pre: string;

  @OneToMany(() => Domicilio, (domicilio) => domicilio.tipopredio)
  domicilio: Domicilio[];
}
