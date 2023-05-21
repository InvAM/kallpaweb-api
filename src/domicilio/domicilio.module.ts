import { Module } from '@nestjs/common';
import { DomicilioController } from './domicilio.controller';
import { DomicilioService } from './domicilio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Domicilio } from './domicilio.entity';
import { CondicionModule } from 'src/condicion/condicion.module';
import { DistritoModule } from 'src/distrito/distrito.module';
import { EstratoModule } from 'src/estrato/estrato.module';
import { TipoPredioModule } from 'src/tipo-predio/tipo-predio.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Domicilio]),
    CondicionModule,
    DistritoModule,
    EstratoModule,
    TipoPredioModule,
  ],
  controllers: [DomicilioController],
  providers: [DomicilioService],
  exports: [DomicilioService],
})
export class DomicilioModule {}
