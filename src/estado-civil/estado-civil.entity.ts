import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Cliente } from 'src/cliente/cliente.entity';
@Entity({ name: 'EstadoCivil' })
export class EstadoCivil {
  @PrimaryColumn()
  IDEstadoCivil: number;

  @Column()
  Descripcion_Es: string;

  @OneToMany(() => Cliente, (Cliente) => Cliente.estadocivil)
  cliente: Cliente[];
}
