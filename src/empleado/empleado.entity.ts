import { CategoriaEmpleado } from 'src/categoria-empleado/categoria-empleado.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Empleado' })
export class Empleado {
  @PrimaryColumn()
  DNI_Em: number;
  @Column()
  Nombre_Em: string;
  @Column()
  Apellido_Em: string;
  @Column()
  Celular_Em: string;
  @Column()
  IDCategoria: number;
  @ManyToOne(
    () => CategoriaEmpleado,
    (categoriaempleado) => categoriaempleado.empleado,
  )
  @JoinColumn({ name: 'IDCategoria' })
  categoriaempleado: CategoriaEmpleado;
}
