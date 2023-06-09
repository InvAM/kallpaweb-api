import { Body, Controller, Get, Post, Param } from '@nestjs/common';
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

  @Post('validar')
  validarEmpleado(
    @Body('DNI_Em') DNI_Em: number,
    @Body('nombreusuario') nombreusuario: string,
    @Body('contraseña') contraseña: string,
  ) {
    return this.credencialesEmpleadoService.validarEmpleado(
      DNI_Em,
      nombreusuario,
      contraseña,
    );
  }
}
