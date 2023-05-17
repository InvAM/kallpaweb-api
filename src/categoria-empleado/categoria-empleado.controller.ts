import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { CreateCategoriaEmpleadoDto } from './dto/create-categoria-empleado.dto';
import { CategoriaEmpleadoService } from './categoria-empleado.service';
import { CategoriaEmpleado } from './categoria-empleado.entity';
@Controller('categoria-empleado')
export class CategoriaEmpleadoController {
  constructor(private categoriaEmpleadoService: CategoriaEmpleadoService) {}

  @Get()
  getCategoriaEmpleado() {
    return this.categoriaEmpleadoService.getCategoriaEmpleado();
  }

  @Post()
  createCategoriaEmpleado(@Body() newCE: CreateCategoriaEmpleadoDto) {
    return this.categoriaEmpleadoService.createCategoriaEmpleado(newCE);
  }

  @Get(':IDCategoria')
  getEstadoCivilOne(
    @Param('IDCategoria') IDCategoria: number,
  ): Promise<CategoriaEmpleado> {
    return this.categoriaEmpleadoService.getCategoriaEmpleadoOne(IDCategoria);
  }
}
