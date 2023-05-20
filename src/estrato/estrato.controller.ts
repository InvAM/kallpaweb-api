import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { CreateEstratoDto } from './dto/estrato.dto';
import { EstratoService } from './estrato.service';
import { Estrato } from './estrato.entity';

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

  @Get(':IDEstrato')
  getEstratoOne(@Param('IDEstrato') IDEstrato: number): Promise<Estrato> {
    return this.estratoService.getEstratoOne(IDEstrato);
  }
}
