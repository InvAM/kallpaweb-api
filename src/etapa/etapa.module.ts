import { Module } from '@nestjs/common';
import { EtapaController } from './etapa.controller';
import { EtapaService } from './etapa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etapa } from './etapa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Etapa])],
  controllers: [EtapaController],
  providers: [EtapaService],
  exports: [EtapaService],
})
export class EtapaModule {}
