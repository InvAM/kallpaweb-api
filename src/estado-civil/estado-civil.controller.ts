import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { CreateEstadoCivilDto } from './dto/create-estado-civil.dto';
import { EstadoCivilService } from './estado-civil.service';
import { EstadoCivil } from './estado-civil.entity';

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

  @Get(':IDEstadoCivil')
  getEstadoCivilOne(
    @Param('IDEstadoCivil') IDEstadoCivil: number,
  ): Promise<EstadoCivil> {
    return this.estadoCivilService.getEstadoCivilOne(IDEstadoCivil);
  }
}
