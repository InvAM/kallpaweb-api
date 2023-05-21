import { Module } from '@nestjs/common';
import { EstadoCivilController } from './estado-civil.controller';
import { EstadoCivilService } from './estado-civil.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoCivil } from './estado-civil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoCivil])],
  controllers: [EstadoCivilController],
  providers: [EstadoCivilService],
  exports: [EstadoCivilService],
})
export class EstadoCivilModule {}
