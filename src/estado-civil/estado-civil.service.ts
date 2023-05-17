import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoCivil } from './estado-civil.entity';
import { Repository } from 'typeorm';
import { CreateEstadoCivilDto } from './dto/create-estado-civil.dto';

@Injectable()
export class EstadoCivilService {
  constructor(
    @InjectRepository(EstadoCivil)
    private estadoCivilRepository: Repository<EstadoCivil>,
  ) {}

  createEstadoCivil(EstadoCivil: CreateEstadoCivilDto) {
    const newEsC = this.estadoCivilRepository.create(EstadoCivil);
    this.estadoCivilRepository.save(newEsC);
  }

  getEstadoCivil() {
    return this.estadoCivilRepository.find();
  }

  getEstadoCivilOne(IDEstadoCivil: number) {
    return this.estadoCivilRepository.findOne({
      where: {
        IDEstadoCivil,
      },
    });
  }
}
