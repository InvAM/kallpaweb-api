import { CategoriaEmpleado } from 'src/categoria-empleado/categoria-empleado.entity';
import { Empleado } from 'src/empleado/empleado.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'CredencialesEmpleado' })
export class CredencialesEmpleado {
  @Column()
  DNI_Em: number;

  @OneToOne(() => Empleado, (empleado) => empleado.credencialesempleado)
  @JoinColumn({ name: 'DNI_Em' })
  empleado: Empleado;

  @PrimaryColumn()
  nombreusuario: string;

  @Column()
  contraseña: string;
}
