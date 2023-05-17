import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Etapa } from './etapa.entity';
import { Repository } from 'typeorm';
import { CreateEtapaDto } from './dto/create-etapa.dto';

@Injectable()
export class EtapaService {
  constructor(
    @InjectRepository(Etapa) private etapaRepository: Repository<Etapa>,
  ) {}

  createEtapa(etapa: CreateEtapaDto) {
    const newEta = this.etapaRepository.create(etapa);
    this.etapaRepository.save(newEta);
  }

  getEtapa() {
    return this.etapaRepository.find();
  }

  getEtapaOne(IDEtapa: number) {
    return this.etapaRepository.findOne({
      where: {
        IDEtapa,
      },
    });
  }
}
