import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEmpleado } from './categoria-empleado.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaEmpleadoDto } from './dto/create-categoria-empleado.dto';

@Injectable()
export class CategoriaEmpleadoService {
  constructor(
    @InjectRepository(CategoriaEmpleado)
    private categoriaEmpleadoRepository: Repository<CategoriaEmpleado>,
  ) {}

  createCategoriaEmpleado(CategoriaEmpleado: CreateCategoriaEmpleadoDto) {
    const newCE = this.categoriaEmpleadoRepository.create(CategoriaEmpleado);
    this.categoriaEmpleadoRepository.save(newCE);
  }

  getCategoriaEmpleado() {
    return this.categoriaEmpleadoRepository.find();
  }

  getCategoriaEmpleadoOne(IDCategoria: number) {
    return this.categoriaEmpleadoRepository.findOne({
      where: {
        IDCategoria: IDCategoria,
      },
    });
  }
}
