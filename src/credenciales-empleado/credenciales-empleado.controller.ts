import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CredencialesEmpleadoService } from './credenciales-empleado.service';
import { CreateCredencialesEmpleadoDto } from './dto/credenciales-empleado.dto';
import { CredencialesEmpleado } from './credenciales-empleado.entity';

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

  // @Post('validar')
  // async validarEmpleado(
  //   @Body(new ValidationPipe())
  //   credencialesEmpleadoDto: CreateCredencialesEmpleadoDto,
  // ) {
  //   const errors = await validate(credencialesEmpleadoDto);
  //   if (errors.length > 0) {
  //     throw new BadRequestException({
  //       errors: this.formatValidationErrors(errors),
  //     });
  //   }

  //   return this.credencialesEmpleadoService.validarEmpleado(
  //     credencialesEmpleadoDto.DNI_Em,
  //     credencialesEmpleadoDto.nombreusuario,
  //     credencialesEmpleadoDto.contraseña,
  //   );
  // }

  @Get('nombreusuario/:nombreusuario')
  getCredencialesBy(
    @Param('nombreusuario') nombreusuario: string,
  ): Promise<CredencialesEmpleado> {
    return this.credencialesEmpleadoService.findOneByUsuario(nombreusuario);
  }
}
