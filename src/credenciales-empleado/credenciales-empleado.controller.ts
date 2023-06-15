import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { CredencialesEmpleadoService } from './credenciales-empleado.service';
import { CreateCredencialesEmpleadoDto } from './dto/credenciales-empleado.dto';
import { validate } from 'class-validator';
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
  async validarEmpleado(
    @Body(new ValidationPipe())
    credencialesEmpleadoDto: CreateCredencialesEmpleadoDto,
  ) {
    const errors = await validate(credencialesEmpleadoDto);
    if (errors.length > 0) {
      throw new BadRequestException({
        errors: this.formatValidationErrors(errors),
      });
    }

    return this.credencialesEmpleadoService.validarEmpleado(
      credencialesEmpleadoDto.DNI_Em,
      credencialesEmpleadoDto.nombreusuario,
      credencialesEmpleadoDto.contraseña,
    );
  }

  private formatValidationErrors(errors: ValidationError[]) {
    return errors.reduce((formattedErrors, error) => {
      Object.entries(error.constraints).forEach(([constraint, message]) => {
        formattedErrors[error.property] = message;
      });
      return formattedErrors;
    }, {});
  }
}
