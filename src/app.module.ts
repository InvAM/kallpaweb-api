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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
