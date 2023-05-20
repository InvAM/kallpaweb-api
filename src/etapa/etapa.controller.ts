import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEtapaDto } from './dto/create-etapa.dto';
import { EtapaService } from './etapa.service';
import { Etapa } from './etapa.entity';

@Controller('etapa')
export class EtapaController {
  constructor(private etapaService: EtapaService) {}

  @Get()
  getEtapa() {
    return this.etapaService.getEtapa();
  }

  @Post()
  createEtapa(@Body() newEta: CreateEtapaDto) {
    return this.etapaService.createEtapa(newEta);
  }

  @Get(':IDEtapa')
  getEtapaOne(@Param('IDEtapa') IDEtapa: number): Promise<Etapa> {
    return this.etapaService.getEtapaOne(IDEtapa);
  }
}
