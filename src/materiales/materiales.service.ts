import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Materiales } from './materiales.entity';
import { Repository } from 'typeorm';
import { CreateMaterialesDto } from './dto/materiales.dto';

@Injectable()
export class MaterialesService {
  constructor(
    @InjectRepository(Materiales)
    private materialesRepository: Repository<Materiales>,
  ) {}

  createMateriales(materiales: CreateMaterialesDto) {
    const newMa = this.materialesRepository.create(materiales);
    this.materialesRepository.save(newMa);
  }

  getMateriales() {
    return this.materialesRepository.find();
  }

  getMaterialOne(IDMateriales: number) {
    return this.materialesRepository.findOne({
      where: {
        IDMateriales,
      },
    });
  }
}
