import { Controller, Body, Get, Post } from '@nestjs/common';
import { CreateCategoriaEmpleadoDto } from './dto/create-categoria-empleado.dto';
import { CategoriaEmpleadoService } from './categoria-empleado.service';
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
}
