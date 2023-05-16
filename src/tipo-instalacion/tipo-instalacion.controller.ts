import { Controller, Body, Get, Post } from '@nestjs/common';
import { CreateTipoInstalacionDto } from './dto/create-tipo-instalacion.dto';
import { TipoInstalacionService } from './tipo-instalacion.service';

@Controller('tipo-instalacion')
export class TipoInstalacionController {
  constructor(private tipoInstalacionService: TipoInstalacionService) {}

  @Get()
  getTipoInstalacion() {
    return this.tipoInstalacionService.getTipoInstalacion();
  }

  @Post()
  createTipoInstalacion(@Body() newTI: CreateTipoInstalacionDto) {
    return this.tipoInstalacionService.createTipoInstalacion(newTI);
  }
}
