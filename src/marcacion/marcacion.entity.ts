import { Empleado } from 'src/empleado/empleado.entity';
import { TipoMarcacion } from 'src/tipo-marcacion/tipo-marcacion.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Marcacion' })
export class Marcacion {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  DNI_Em: number;
  @ManyToOne(() => Empleado, (empleado) => empleado.marcacion)
  @JoinColumn({ name: 'DNI_Em' })
  empleado: Empleado[];

  @Column('decimal', { precision: 10, scale: 7 })
  Latitud: number;

  @Column('decimal', { precision: 10, scale: 7 })
  Longitud: number;

  @Column()
  Fecha_Marcacion: string;

  @Column()
  Inicio_Marcacion: string;

  @Column()
  Fin_Marcacion: string;

  @Column()
  IDTipoMarcacion: number;
  @OneToOne(() => TipoMarcacion, (tipoMarcacion) => tipoMarcacion.marcacion)
  @JoinColumn({ name: 'IDTipoMarcacion' })
  tipoMarcacion: TipoMarcacion[];
}
