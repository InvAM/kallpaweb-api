import { Module } from '@nestjs/common';
import { DetalleEtapaMaterialController } from './detalle-etapa-material.controller';
import { DetalleEtapaMaterialService } from './detalle-etapa-material.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleEtapaMaterial } from './detalle-etapa-material.entity';
import { EtapaContratoModule } from 'src/etapa-contrato/etapa-contrato.module';
import { MaterialesModule } from 'src/materiales/materiales.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DetalleEtapaMaterial]),
    EtapaContratoModule,
    MaterialesModule,
  ],
  controllers: [DetalleEtapaMaterialController],
  providers: [DetalleEtapaMaterialService],
})
export class DetalleEtapaMaterialModule {}
