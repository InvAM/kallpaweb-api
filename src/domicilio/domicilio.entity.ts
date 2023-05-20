import { Condicion } from 'src/condicion/condicion.entity';
import { Distrito } from 'src/distrito/distrito.entity';
import { Estrato } from 'src/estrato/estrato.entity';
import { TipoPredio } from 'src/tipo-predio/tipo-predio.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Domicilio' })
export class Domicilio {
  @PrimaryColumn()
  IDDomicilio: number;

  @Column()
  Ubicacion_Dom: string;

  @Column()
  Direccion_Dom: string;

  @Column()
  Interior_Dom: string;

  @Column()
  Piso_Dom: string;

  @Column()
  Nomb_Malla_Dom: string;

  @Column()
  IDCondicion: number;

  @ManyToOne(() => Condicion, (condicion) => condicion.domicilio)
  @JoinColumn({ name: 'IDCondicion' })
  condicion: Condicion;

  @Column()
  IDEstrato: number;

  @ManyToOne(() => Estrato, (estrato) => estrato.domicilio)
  @JoinColumn({ name: 'IDEstrato' })
  estrato: Estrato;

  @Column()
  IDPredio: number;

  @ManyToOne(() => TipoPredio, (tipopredio) => tipopredio.domicilio)
  @JoinColumn({ name: 'IDPredio' })
  tipopredio: TipoPredio;

  @Column()
  IDDistrito: number;

  @ManyToOne(() => Distrito, (distrito) => distrito.domicilio)
  @JoinColumn({ name: 'IDDistrito' })
  distrito: Distrito;
}
