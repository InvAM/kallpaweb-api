import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateDomicilioDto } from './dto/create-domicilio.dto';
import { DomicilioService } from './domicilio.service';

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
}
