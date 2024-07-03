import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateDomicilioDto } from './dto/create-domicilio.dto';
import { DomicilioService } from './domicilio.service';
import { Domicilio } from './domicilio.entity';

@Controller('domicilio')
export class DomicilioController {
  constructor(private domicilioService: DomicilioService) {}

  @Post()
  createDomiclio(@Body() domicilio: CreateDomicilioDto) {
    return this.domicilioService.createDomiclio(domicilio);
  }

  @Get()
  getDomicilio() {
    return this.domicilioService.getDomicilio();
  }

  @Get(':IDDomicilio')
  getDomicilioOne(
    @Param('IDDomicilio') IDDomicilio: number,
  ): Promise<Domicilio> {
    return this.domicilioService.getDomicilioOne(IDDomicilio);
  }
}
