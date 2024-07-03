import { Domicilio } from 'src/domicilio/domicilio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Estrato' })
export class Estrato {
  @PrimaryGeneratedColumn()
  IDEstrato: number;

  @Column()
  Descripcion_Estrato: string;

  @OneToMany(() => Domicilio, (domicilio) => domicilio.estrato)
  domicilio: Domicilio[];
}
