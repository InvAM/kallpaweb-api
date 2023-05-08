import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Nacionalidad' })
export class Nacionalidad {
  @PrimaryColumn()
  IDNacionalidad: number;

  @Column()
  Descripcion_NA: string;
}
