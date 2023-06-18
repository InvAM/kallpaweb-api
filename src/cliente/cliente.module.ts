import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "./cliente.entity";
import { DomicilioModule } from "src/domicilio/domicilio.module";
import { EstadoCivilModule } from "src/estado-civil/estado-civil.module";
import { NacionalidadModule } from "src/nacionalidad/nacionalidad.module";
import { GeneroModule } from "src/genero/genero.module";
import { ClienteController } from "./cliente.controller";
import { ClienteService } from "./cliente.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([Cliente]),
        DomicilioModule,
        EstadoCivilModule,
        NacionalidadModule,
        GeneroModule,
    ],
    controllers: [ClienteController],
    providers: [ClienteService],
    exports: [ClienteService],
})
export class ClienteModule {}
