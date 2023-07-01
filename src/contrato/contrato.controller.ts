import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { Contrato } from './contrato.entity';

@Controller('contrato')
export class ContratoController {
  constructor(private contratoService: ContratoService) {}

  @Post()
  createContrato(@Body() contrato: CreateContratoDto) {
    return this.contratoService.createContrato(contrato);
  }

  @Get()
  getContrato() {
    return this.contratoService.getContrato();
  }

  @Get(':IDContrato')
  getContratoOne(@Param('IDContrato') IDContrato: number): Promise<Contrato> {
    return this.contratoService.getContratoOne(IDContrato);
  }

  @Patch(':IDContrato')
  updateContrato(
    @Param('IDContrato', ParseIntPipe) IDContrato: number,
    @Body() contrato: CreateContratoDto,
  ) {
    return this.contratoService.actualizarContrato(IDContrato, contrato);
  }
}
