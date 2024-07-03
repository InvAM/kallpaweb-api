import { Module } from '@nestjs/common';
import { TipoInstalacionController } from './tipo-instalacion.controller';
import { TipoInstalacionService } from './tipo-instalacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoInstalacion } from './tipo-instalacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoInstalacion])],
  controllers: [TipoInstalacionController],
  providers: [TipoInstalacionService],
  exports: [TipoInstalacionService],
})
export class TipoInstalacionModule {}
