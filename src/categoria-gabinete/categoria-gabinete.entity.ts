
import { Contrato } from 'src/contrato/contrato.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Categoria_Gabinete' })
export class Categoria_Gabinete {
  @PrimaryColumn()
  IDGabineteCategoria: number;

  @Column()
  Descripcion_Ga: string;

  @OneToMany(() => Contrato, (contrato) =>contrato.categoriagabinete)
  contrato:Contrato[];
}
