import { Module } from '@nestjs/common';
import { CredencialesEmpleadoController } from './credenciales-empleado.controller';
import { CredencialesEmpleadoService } from './credenciales-empleado.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredencialesEmpleado } from './credenciales-empleado.entity';
import { EmpleadoModule } from 'src/empleado/empleado.module';

@Module({
  imports: [TypeOrmModule.forFeature([CredencialesEmpleado]), EmpleadoModule],
  controllers: [CredencialesEmpleadoController],
  providers: [CredencialesEmpleadoService],
})
export class CredencialesEmpleadoModule {}
