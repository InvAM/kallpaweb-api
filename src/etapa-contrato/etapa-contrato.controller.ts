import { Body, Controller, Get, Post } from '@nestjs/common';
import { EtapaContratoService } from './etapa-contrato.service';
import { CreateEtapaContratoDto } from './dto/etapa-contrato.dto';

@Controller('etapa-contrato')
export class EtapaContratoController {
  constructor(private etapaContratoService: EtapaContratoService) {}

  @Post()
  createEtapContrato(@Body() etapaContrato: CreateEtapaContratoDto) {
    return this.etapaContratoService.createEtapaContrato(etapaContrato);
  }

  @Get()
  getEtapaContrato() {
    return this.etapaContratoService.getEtapaContrato();
  }
}
