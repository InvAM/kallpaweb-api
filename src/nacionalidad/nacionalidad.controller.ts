import { Controller, Body, Get, Post } from '@nestjs/common';
import { NacionalidadService } from './nacionalidad.service';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';

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
}
