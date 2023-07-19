import {
  Body,
  Controller,
  Get,
  Patch,
  Param,
  Post,
  ParseIntPipe,
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
  @Patch(':IDContrato')
  updateContrato(
    @Param('IDContrato', ParseIntPipe) IDContrato: number,
    @Body() contrato: CreateContratoDto,
  ) {
    return this.contratoService.actualizarContrato(IDContrato, contrato);
  }
}
