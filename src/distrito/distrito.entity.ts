import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Distrito' })
export class Distrito {
  @PrimaryColumn()
  IDDistrito: number;

  @Column()
  Nombre_Di: string;
}
