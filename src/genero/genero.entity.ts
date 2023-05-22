import { Usuario } from 'src/usuario/usuario.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Genero' })
export class Genero {
  @PrimaryColumn()
  IDGenero: number;

  @Column()
  Descripcion_G: string;

  @OneToMany(() => Usuario, (Usuario) => Usuario.genero)
  usuario: Usuario[];
}
