import { Module } from '@nestjs/common';
import { TipoMarcacionController } from './tipo-marcacion.controller';
import { TipoMarcacionService } from './tipo-marcacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoMarcacion } from './tipo-marcacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoMarcacion])],
  controllers: [TipoMarcacionController],
  providers: [TipoMarcacionService],
  exports: [TipoMarcacionService],
})
export class TipoMarcacionModule {}
