import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { NacionalidadService } from './nacionalidad.service';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';
import { Nacionalidad } from './nacionalidad.entity';

@Controller('nacionalidad')
export class NacionalidadController {
  constructor(private nacionalidadService: NacionalidadService) {}

  @Get()
  getNacionalidad() {
    return this.nacionalidadService.getNacionalidad();
  }

  @Post()
  createNacionalidad(@Body() newNac: CreateNacionalidadDto) {
    return this.nacionalidadService.createNacionalidad(newNac);
  }

  @Get(':IDNacionalidad')
  getNacionalidadOne(
    @Param('IDNacionalidad') IDNacionalidad: number,
  ): Promise<Nacionalidad> {
    return this.nacionalidadService.getNacionalidadOne(IDNacionalidad);
  }
}
