import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
