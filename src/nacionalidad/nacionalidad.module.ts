import { Module } from '@nestjs/common';
import { NacionalidadService } from './nacionalidad.service';
import { NacionalidadController } from './nacionalidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nacionalidad } from './nacionalidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nacionalidad])],
  controllers: [NacionalidadController],
  providers: [NacionalidadService],
})
export class NacionalidadModule {}
