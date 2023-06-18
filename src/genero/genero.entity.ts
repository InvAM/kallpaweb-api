import { Cliente } from 'src/cliente/cliente.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Genero' })
export class Genero {
  @PrimaryColumn()
  IDGenero: number;

  @Column()
  Descripcion_G: string;

  @OneToMany(() => Cliente, (Cliente) => Cliente.genero)
  cliente: Cliente[];
}
