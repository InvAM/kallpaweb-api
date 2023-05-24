import { DetalleEtapaMaterial } from 'src/detalle-etapa-material/detalle-etapa-material.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Materiales' })
export class Materiales {
  @PrimaryColumn()
  IDMateriales: number;

  @Column()
  Nombre_Ma: string;

  @Column()
  UnidadMedida_Ma: string;

  @Column()
  Stock_Ma: number;

  @OneToMany(
    () => DetalleEtapaMaterial,
    (detalleEtapaMaterial) => detalleEtapaMaterial.materiales,
  )
  detalleEtapaMaterial: DetalleEtapaMaterial[];
}
