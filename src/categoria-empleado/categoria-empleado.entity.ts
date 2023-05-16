import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'CategoriaEmpleado' })
export class CategoriaEmpleado {
  @PrimaryColumn()
  IDCategoria: number;

  @Column()
  Cargo_CE: string;
}
