import { Module } from '@nestjs/common';
import { CategoriaEmpleadoController } from './categoria-empleado.controller';
import { CategoriaEmpleadoService } from './categoria-empleado.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEmpleado } from './categoria-empleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEmpleado])],
  controllers: [CategoriaEmpleadoController],
  providers: [CategoriaEmpleadoService],
})
export class CategoriaEmpleadoModule {}
