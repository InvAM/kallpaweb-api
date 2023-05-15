import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { DistritoService } from './distrito.service';

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
}
