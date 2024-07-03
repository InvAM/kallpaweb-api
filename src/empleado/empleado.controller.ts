import { Controller, Post, Get, Body, Param,Patch,ParseIntPipe} from '@nestjs/common';
import { CreateEmpleadoDto } from '../empleado/dto/empleado.dto';
import { EmpleadoService } from './empleado.service';
import { Empleado } from './empleado.entity';
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
  
  @Get(':DNI_Em')
  getClienteOne(@Param('DNI_Em') DNI_Em: number): Promise<Empleado> {
    return this.empleadoService.getEmpleadoOne(DNI_Em);
  }

  @Patch(':DNI_Em')
  updateCliente(
    @Param('DNI_Em', ParseIntPipe) DNI_Em: number,
    @Body() empleado: CreateEmpleadoDto,
  ) {
    return this.empleadoService.actualizarEmpleado(DNI_Em,empleado);
  }
}
