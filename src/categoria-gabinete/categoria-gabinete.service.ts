import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria_Gabinete } from './categoria-gabinete.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaGabineteDto } from './dto/categoria-gabinete.dto';
@Injectable()
export class CategoriaGabineteService {
  constructor(
    @InjectRepository(Categoria_Gabinete)
    private categoriaGabineteRepository: Repository<Categoria_Gabinete>,
  ) {}

  createCategoriaGabinete(categoriaGabinete: CreateCategoriaGabineteDto) {
    const newCG = this.categoriaGabineteRepository.create(categoriaGabinete);
    this.categoriaGabineteRepository.save(newCG);
  }

  getCategoriaGabinete() {
    return this.categoriaGabineteRepository.find();
  }
}
