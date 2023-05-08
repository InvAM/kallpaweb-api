import { Controller, Body, Post, Get } from '@nestjs/common';
import { CreateEstadoCivilDto } from './dto/create-estado-civil.dto';
import { EstadoCivilService } from './estado-civil.service';

@Controller('estado-civil')
export class EstadoCivilController {
  constructor(private estadoCivilService: EstadoCivilService) {}

  @Get()
  getEstadoCivil() {
    return this.estadoCivilService.getEstadoCivil();
  }

  @Post()
  createEstadoCivil(@Body() newEsC: CreateEstadoCivilDto) {
    return this.estadoCivilService.createEstadoCivil(newEsC);
  }
}
