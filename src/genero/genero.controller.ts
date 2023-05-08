import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { GeneroService } from './genero.service';

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
}
