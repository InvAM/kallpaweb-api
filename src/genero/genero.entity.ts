import { Cliente } from 'src/cliente/cliente.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Genero' })
export class Genero {
  @PrimaryGeneratedColumn()
  IDGenero: number;

  @Column()
  Descripcion_G: string;

  @OneToMany(() => Cliente, (Cliente) => Cliente.genero)
  cliente: Cliente[];
}
