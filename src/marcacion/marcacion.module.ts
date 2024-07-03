import { Module } from '@nestjs/common';
import { MarcacionService } from './marcacion.service';
import { MarcacionController } from './marcacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marcacion } from './marcacion.entity';
import { TipoMarcacionModule } from 'src/tipo-marcacion/tipo-marcacion.module';

@Module({
  imports: [TypeOrmModule.forFeature([Marcacion]), TipoMarcacionModule],
  providers: [MarcacionService],
  controllers: [MarcacionController],
  exports: [MarcacionService],
})
export class MarcacionModule {}
