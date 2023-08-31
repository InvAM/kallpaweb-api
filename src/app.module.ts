import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneroModule } from './genero/genero.module';
import { NacionalidadModule } from './nacionalidad/nacionalidad.module';
import { EstadoCivilModule } from './estado-civil/estado-civil.module';
import { EstratoModule } from './estrato/estrato.module';
import { CategoriaGabineteModule } from './categoria-gabinete/categoria-gabinete.module';
import { CondicionModule } from './condicion/condicion.module';
import { DistritoModule } from './distrito/distrito.module';
import { EtapaModule } from './etapa/etapa.module';
import { TipoPredioModule } from './tipo-predio/tipo-predio.module';
import { CategoriaEmpleadoModule } from './categoria-empleado/categoria-empleado.module';
import { TipoInstalacionModule } from './tipo-instalacion/tipo-instalacion.module';
import { MaterialesModule } from './materiales/materiales.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ContratoModule } from './contrato/contrato.module';
import { EtapaContratoModule } from './etapa-contrato/etapa-contrato.module';
import { DetalleEtapaMaterialModule } from './detalle-etapa-material/detalle-etapa-material.module';
import { CredencialesEmpleadoModule } from './credenciales-empleado/credenciales-empleado.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'JYF27',
      port: 1433,
      username: 'JYF27',
      password: '7131',
      database: 'Kallpa',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      extra: {
        trustServerCertificate: true,
      },
    }),
    GeneroModule,
    NacionalidadModule,
    EstadoCivilModule,
    EstratoModule,
    CondicionModule,
    CategoriaGabineteModule,
    DistritoModule,
    EtapaModule,
    TipoPredioModule,
    CategoriaEmpleadoModule,
    TipoInstalacionModule,
    MaterialesModule,
    DomicilioModule,
    EmpleadoModule,
    ContratoModule,
    EtapaContratoModule,
    DetalleEtapaMaterialModule,
    CredencialesEmpleadoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
