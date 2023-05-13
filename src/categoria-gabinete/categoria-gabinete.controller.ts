import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCategoriaGabineteDto } from './dto/categoria-gabinete.dto';
import { CategoriaGabineteService } from './categoria-gabinete.service';

@Controller('categoria-gabinete')
export class CategoriaGabineteController {
  constructor(private categoriaGabineteService: CategoriaGabineteService) {}

  @Get()
  getCategoriaGabinete() {
    return this.categoriaGabineteService.getCategoriaGabinete();
  }

  @Post()
  createCategoriaGabinete(@Body() newCG: CreateCategoriaGabineteDto) {
    return this.categoriaGabineteService.createCategoriaGabinete(newCG);
  }
}
