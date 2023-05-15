import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneroModule } from './genero/genero.module';
import { NacionalidadModule } from './nacionalidad/nacionalidad.module';
import { EstadoCivilModule } from './estado-civil/estado-civil.module';
import { EstratoModule } from './estrato/estrato.module';
import { CategoriaGabineteModule } from './categoria-gabinete/categoria-gabinete.module';
import { CondicionModule } from './condicion/condicion.module';
import { DistritoModule } from './distrito/distrito.module';
import { EtapaModule } from './etapa/etapa.module';

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
    UsersModule,
    GeneroModule,
    NacionalidadModule,
    EstadoCivilModule,
    EstratoModule,
    CondicionModule,
    CategoriaGabineteModule,
    DistritoModule,
    EtapaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
