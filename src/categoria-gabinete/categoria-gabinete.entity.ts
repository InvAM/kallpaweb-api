import { Contrato } from 'src/contrato/contrato.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Categoria_Gabinete' })
export class Categoria_Gabinete {
  @PrimaryGeneratedColumn()
  IDGabineteCategoria: number;

  @Column()
  Descripcion_Ga: string;

  @OneToMany(() => Contrato, (contrato) => contrato.categoriagabinete)
  contrato: Contrato[];
}
