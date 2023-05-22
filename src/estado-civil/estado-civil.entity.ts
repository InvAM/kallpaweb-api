import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Usuario } from 'src/usuario/usuario.entity';
@Entity({ name: 'EstadoCivil' })
export class EstadoCivil {
  @PrimaryColumn()
  IDEstadoCivil: number;

  @Column()
  Descripcion_Es: string;

  @OneToMany(() => Usuario, (Usuario) => Usuario.estadocivil)
  usuario: Usuario[];
}
