import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCondicionDto } from './dto/create-condicion.dto';
import { CondicionService } from './condicion.service';
import { GeneroService } from 'src/genero/genero.service';
import { Condicion } from './condicion.entity';

@Controller('condicion')
export class CondicionController {
  constructor(private condicionService: CondicionService) {}

  @Get()
  getCondicion() {
    return this.condicionService.getCondicion();
  }

  @Post()
  createCondicion(@Body() newCon: CreateCondicionDto) {
    return this.condicionService.createCondicion(newCon);
  }

  @Get(':IDCondicion')
  getCondicionOne(
    @Param('IDCondicion') IDCondicion: number,
  ): Promise<Condicion> {
    return this.condicionService.getCondicionOne(IDCondicion);
  }
}
