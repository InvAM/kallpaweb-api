import { Body, Controller, Get, Post } from '@nestjs/common';
import { DetalleEtapaMaterialService } from './detalle-etapa-material.service';
import { CreateDetalleETapaMaterialDto } from './dto/detalle-etapa-material.dto';

@Controller('detalle-etapa-material')
export class DetalleEtapaMaterialController {
  constructor(
    private detalleEtapMaterialService: DetalleEtapaMaterialService,
  ) {}

  @Post()
  createDetalleEtapMaterial(
    @Body() detalleEtapaMaterial: CreateDetalleETapaMaterialDto,
  ) {
    return this.detalleEtapMaterialService.createDetalleEtapaMaterial(
      detalleEtapaMaterial,
    );
  }

  @Get()
  getDetalleEtapaMaterial() {
    return this.detalleEtapMaterialService.getDetalleEtapaMaterial();
  }
}
