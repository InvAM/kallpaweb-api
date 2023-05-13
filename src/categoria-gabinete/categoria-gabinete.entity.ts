import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Categoria_Gabinete' })
export class Categoria_Gabinete {
  @PrimaryColumn()
  IDGabineteCategoria: number;

  @Column()
  Descripcion_Ga: string;
}
