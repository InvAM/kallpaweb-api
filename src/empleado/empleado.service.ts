import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './empleado.entity';
import { Repository } from 'typeorm';
import { CategoriaEmpleadoService } from 'src/categoria-empleado/categoria-empleado.service';
import { CreateEmpleadoDto } from './dto/empleado.dto';
@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
    private categoriaEmpleadoService: CategoriaEmpleadoService,
  ) {}

  async createEmpleado(empleado: CreateEmpleadoDto) {
    const CategoriaEmpleadoFound =
      await this.categoriaEmpleadoService.getCategoriaEmpleadoOne(
        empleado.IDCategoria,
      );
    if (!CategoriaEmpleadoFound) {
      return new HttpException(
        'Faltan datos (IDCategoria)',
        HttpStatus.NOT_FOUND,
      );
    }
    const newEmpleado = this.empleadoRepository.create(empleado);
    return this.empleadoRepository.save(newEmpleado);
  }

  getEmpleado() {
    return this.empleadoRepository.find();
  }

  getEmpleadoOne(DNI_Em: number) {
    return this.empleadoRepository.findOne({
      where: {
        DNI_Em,
      },
    });
  }
}
