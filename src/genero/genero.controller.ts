import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { GeneroService } from './genero.service';
import { Genero } from './genero.entity';

@Controller('genero')
export class GeneroController {
  constructor(private generoService: GeneroService) {}

  @Get()
  getGenero() {
    return this.generoService.getGenero();
  }

  @Post()
  createGenero(@Body() newGen: CreateGeneroDto) {
    return this.generoService.createGenero(newGen);
  }

  @Get(':IDGenero')
  getGeneroOne(@Param('IDGenero') IDGenero: number): Promise<Genero> {
    return this.generoService.getGeneroOne(IDGenero);
  }
}
