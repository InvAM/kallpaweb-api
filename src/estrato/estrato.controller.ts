import { Controller, Body, Get, Post } from '@nestjs/common';
import { CreateEstratoDto } from './dto/estrato.dto';
import { EstratoService } from './estrato.service';

@Controller('estrato')
export class EstratoController {
  constructor(private estratoService: EstratoService) {}

  @Get()
  getGenero() {
    return this.estratoService.getEstrato();
  }

  @Post()
  createEstrato(@Body() newEst: CreateEstratoDto) {
    return this.estratoService.createEstrato(newEst);
  }
}
