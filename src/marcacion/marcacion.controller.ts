import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MarcacionService } from './marcacion.service';
import { CreateMarcacionDto } from './dto/create-marcacion.dto';
import { Marcacion } from './marcacion.entity';

@Controller('marcacion')
export class MarcacionController {
  constructor(private marcacionService: MarcacionService) {}

  @Post()
  createMarcacion(@Body() marcacion: CreateMarcacionDto) {
    return this.marcacionService.createMarcacion(marcacion);
  }

  @Get()
  getMarcacion() {
    return this.marcacionService.getMarcacion();
  }

  @Get(':DNI_Em')
  getMarcacionOne(@Param('DNI_Em') DNI_Em: number): Promise<Marcacion> {
    return this.marcacionService.getMarcacionOne(DNI_Em);
  }

  @Patch(':DNI_Em')
  updateMarcacion(
    @Param('DNI_Em', ParseIntPipe) DNI_Em: number,
    @Body() marcacion: CreateMarcacionDto,
  ) {
    return this.marcacionService.updateMarcacion(DNI_Em, marcacion);
  }
}
