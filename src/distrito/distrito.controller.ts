import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { DistritoService } from './distrito.service';
import { Distrito } from './distrito.entity';

@Controller('distrito')
export class DistritoController {
  constructor(private distritoService: DistritoService) {}

  @Get()
  getDistrito() {
    return this.distritoService.getDistrito();
  }

  @Post()
  createDistrito(@Body() newDi: CreateDistritoDto) {
    return this.distritoService.createDistrito(newDi);
  }

  @Get(':IDDistrito')
  getDistritoOne(@Param('IDDistrito') IDDistrito: number): Promise<Distrito> {
    return this.distritoService.getDistritoOne(IDDistrito);
  }
}
