import { Module } from '@nestjs/common';
import { EtapaContratoController } from './etapa-contrato.controller';
import { EtapaContratoService } from './etapa-contrato.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtapaContrato } from './etapa-contrato.entity';
import { EtapaModule } from 'src/etapa/etapa.module';
import { EmpleadoModule } from 'src/empleado/empleado.module';
import { ContratoModule } from 'src/contrato/contrato.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EtapaContrato]),
    EtapaModule,
    EmpleadoModule,
    ContratoModule,
  ],
  controllers: [EtapaContratoController],
  providers: [EtapaContratoService],
  exports: [EtapaContratoService],
})
export class EtapaContratoModule {}
