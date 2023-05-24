import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateEmpleadoDto } from '../empleado/dto/empleado.dto';
import { EmpleadoService } from './empleado.service';
@Controller('empleado')
export class EmpleadoController {
  constructor(private empleadoService: EmpleadoService) {}
  @Post()
  createEmpleado(@Body() empleado: CreateEmpleadoDto) {
    return this.empleadoService.createEmpleado(empleado);
  }
  @Get()
  getEmpleado() {
    return this.empleadoService.getEmpleado();
  }
}
