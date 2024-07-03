import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CredencialesEmpleado } from './credenciales-empleado.entity';
import { Repository } from 'typeorm';
import { EmpleadoService } from 'src/empleado/empleado.service';
import { CreateCredencialesEmpleadoDto } from './dto/credenciales-empleado.dto';

@Injectable()
export class CredencialesEmpleadoService {
  constructor(
    @InjectRepository(CredencialesEmpleado)
    private CredencialesRepository: Repository<CredencialesEmpleado>,
    private empleadoService: EmpleadoService,
  ) {}

  async createCredenciales(
    credencialesEmpleado: CreateCredencialesEmpleadoDto,
  ) {
    const empleadoFound = await this.empleadoService.getEmpleadoOne(
      credencialesEmpleado.DNI_Em,
    );
    if (!empleadoFound) {
      return new HttpException('Falta DNI del Empleado', HttpStatus.NOT_FOUND);
    }
    const newCredencialesEmpleado =
      this.CredencialesRepository.create(credencialesEmpleado);
    return this.CredencialesRepository.save(newCredencialesEmpleado);
  }

  getCredencialesEmpleado() {
    return this.CredencialesRepository.find({ relations: ['empleado'] });
  }

  validarEmpleado(DNI_Em: number, nombreusuario: string, contraseña: string) {
    return this.CredencialesRepository.findOneOrFail({
      where: {
        DNI_Em: DNI_Em,
        nombreusuario: nombreusuario,
        contraseña: contraseña,
      },
    });
  }

  deleteCEmpleado(DNI_Em: number) {
    return this.CredencialesRepository.delete({ DNI_Em });
  }

  findOneByUsuario(nombreusuario: string) {
    return this.CredencialesRepository.findOneBy({ nombreusuario });
  }
}
