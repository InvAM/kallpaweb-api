import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { CreateMaterialesDto } from './dto/materiales.dto';
import { MaterialesService } from './materiales.service';
import { Materiales } from './materiales.entity';
@Controller('materiales')
export class MaterialesController {
  constructor(private materialesService: MaterialesService) {}

  @Get()
  getMateriales() {
    return this.materialesService.getMateriales();
  }

  @Post()
  createMateriales(@Body() newMa: CreateMaterialesDto) {
    return this.materialesService.createMateriales(newMa);
  }

  @Get(':IDMateriales')
  getMaterialesOne(
    @Param('IDMateriales') IDMateriales: number,
  ): Promise<Materiales> {
    return this.materialesService.getMaterialOne(IDMateriales);
  }
}
