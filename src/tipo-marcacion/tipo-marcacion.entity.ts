import { Marcacion } from "src/marcacion/marcacion.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'TipoMarcacion'})
export class TipoMarcacion{
    @PrimaryGeneratedColumn()
    IDTipoMarcacion: number;

    @Column()
    Descripcion_Mar: string;

    @OneToOne(()=>Marcacion,(marcacion)=>marcacion.tipoMarcacion)
    marcacion: Marcacion
}