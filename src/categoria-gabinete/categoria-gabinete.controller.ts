import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCategoriaGabineteDto } from './dto/categoria-gabinete.dto';
import { CategoriaGabineteService } from './categoria-gabinete.service';
import { Categoria_Gabinete } from './categoria-gabinete.entity';

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

  @Get(':IDGabineteCategoria')
  getCategoriaGabineteOne(
    @Param('IDGabineteCategoria') IDGabineteCategoria: number,
  ): Promise<Categoria_Gabinete> {
    return this.categoriaGabineteService.getCategoriaGabineteOne(
      IDGabineteCategoria,
    );
  }
}
