import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { CreateTipoPredioDto } from './dto/create-tipo-predio.dto';
import { TipoPredioService } from './tipo-predio.service';
import { TipoPredio } from './tipo-predio.entity';
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

  @Get(':IDPredio')
  getTipoPredioOne(@Param('IDPredio') IDPredio: number): Promise<TipoPredio> {
    return this.tipoPredioService.getTipoPredioOne(IDPredio);
  }
}
