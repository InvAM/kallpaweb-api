import { Usuario } from 'src/usuario/usuario.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Nacionalidad' })
export class Nacionalidad {
  @PrimaryColumn()
  IDNacionalidad: number;

  @Column()
  Descripcion_NA: string;

  @OneToMany(() => Usuario, (Usuario) => Usuario.nacionalidad)
  usuario: Usuario[];
}
