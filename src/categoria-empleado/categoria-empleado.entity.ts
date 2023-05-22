import { Empleado } from 'src/empleado/empleado.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'CategoriaEmpleado' })
export class CategoriaEmpleado {
  @PrimaryColumn()
  IDCategoria: number;

  @Column()
  Cargo_CE: string;

  @OneToMany(() => Empleado, (empleado) => empleado.categoriaempleado)
  empleado: Empleado[];
}
