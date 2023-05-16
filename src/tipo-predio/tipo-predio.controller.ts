import { Controller, Body, Get, Post } from '@nestjs/common';
import { CreateTipoPredioDto } from './dto/create-tipo-predio.dto';
import { TipoPredioService } from './tipo-predio.service';
@Controller('tipo-predio')
export class TipoPredioController {
  constructor(private tipoPredioService: TipoPredioService) {}

  @Get()
  getTipoPredio() {
    return this.tipoPredioService.getTipoPredio();
  }

  @Post()
  createTipoPredio(@Body() newPre: CreateTipoPredioDto) {
    return this.tipoPredioService.createTipoPredio(newPre);
  }
}
