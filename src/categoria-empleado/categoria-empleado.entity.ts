import { Empleado } from 'src/empleado/empleado.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CategoriaEmpleado' })
export class CategoriaEmpleado {
  @PrimaryGeneratedColumn()
  IDCategoria: number;

  @Column()
  Cargo_CE: string;

  @OneToMany(() => Empleado, (empleado) => empleado.categoriaempleado)
  empleado: Empleado[];
}
