import { Body, Controller, Get, Post } from '@nestjs/common';
import { CredencialesEmpleadoService } from './credenciales-empleado.service';
import { CreateCredencialesEmpleadoDto } from './dto/credenciales-empleado.dto';

@Controller('credenciales-empleado')
export class CredencialesEmpleadoController {
  constructor(
    private credencialesEmpleadoService: CredencialesEmpleadoService,
  ) {}

  @Post()
  createCredencialesEmpleado(
    @Body() credencialesEmpleado: CreateCredencialesEmpleadoDto,
  ) {
    return this.credencialesEmpleadoService.createCredenciales(
      credencialesEmpleado,
    );
  }

  @Get()
  getCredencialesEmpleado() {
    return this.credencialesEmpleadoService.getCredencialesEmpleado();
  }
}
