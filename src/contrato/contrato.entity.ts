import { Categoria_Gabinete } from "src/categoria-gabinete/categoria-gabinete.entity";
import { TipoInstalacion } from "src/tipo-instalacion/tipo-instalacion.entity";
import { Usuario } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity({name: 'Contrato'})
export class Contrato{
    @PrimaryColumn()
    IDContrato: number;

    @Column()
    Fecha_Con: Date;

    @Column()
    NumeroRadicado_Con: String;

    @Column()
    numSum: number;

    @Column()
    PuntoInstalacion_Con: number;

    @Column()
    IDGabineteCategoria: number;

    @ManyToOne(() => Categoria_Gabinete, (categoriagabinete)=> categoriagabinete.contrato)
    @JoinColumn({name: 'IDGabineteCategoria'})
    categoriagabinete: Categoria_Gabinete[];

    @Column()
    IDTipoInst: number;

    @ManyToOne(() => TipoInstalacion, (tipoinstalacion) => tipoinstalacion.contrato)
    @JoinColumn({name: 'IDTipoInst'})
    tipoinstalacion: TipoInstalacion[];

    @Column()
    DNI_Usu: number;

    @OneToOne(()=>Usuario, (usuario)=>usuario.contrato)
    @JoinColumn({name: 'DNI_Usuario'})
    usuario: Usuario[];

    @Column()
    DNI_Emp: number;



    
    




}