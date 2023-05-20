import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { CreateTipoInstalacionDto } from './dto/create-tipo-instalacion.dto';
import { TipoInstalacionService } from './tipo-instalacion.service';
import { TipoInstalacion } from './tipo-instalacion.entity';

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

  @Get(':IDTipoInst')
  getTipoInstalacionOne(
    @Param('IDTipoInst') IDTipoInst: number,
  ): Promise<TipoInstalacion> {
    return this.tipoInstalacionService.getTipoInstalacionOne(IDTipoInst);
  }
}
