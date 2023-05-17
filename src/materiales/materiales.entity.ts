import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Materiales' })
export class Materiales {
  @PrimaryColumn()
  IDMateriales: number;

  @Column()
  Nombre_Ma: string;

  @Column()
  UnidadMedida_Ma: string;

  @Column()
  Stock_Ma: number;
}
