import { Module } from '@nestjs/common';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './empleado.entity';
import { CategoriaEmpleadoModule } from 'src/categoria-empleado/categoria-empleado.module';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado]), CategoriaEmpleadoModule],
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
  exports: [EmpleadoService],
})
export class EmpleadoModule {}
