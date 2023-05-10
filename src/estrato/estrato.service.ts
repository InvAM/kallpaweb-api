import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estrato } from './estrato.entity';
import { Repository } from 'typeorm';
import { CreateEstratoDto } from './dto/estrato.dto';

@Injectable()
export class EstratoService {
  constructor(
    @InjectRepository(Estrato) private estratoRepository: Repository<Estrato>,
  ) {}

  createEstrato(estrato: CreateEstratoDto) {
    const newEst = this.estratoRepository.create(estrato);
    this.estratoRepository.save(newEst);
  }

  getEstrato() {
    return this.estratoRepository.find();
  }
}
