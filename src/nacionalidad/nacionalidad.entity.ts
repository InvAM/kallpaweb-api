import { Cliente } from 'src/cliente/cliente.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Nacionalidad' })
export class Nacionalidad {
  @PrimaryGeneratedColumn()
  IDNacionalidad: number;

  @Column()
  Descripcion_NA: string;

  @OneToMany(() => Cliente, (Cliente) => Cliente.nacionalidad)
  cliente: Cliente[];
}
