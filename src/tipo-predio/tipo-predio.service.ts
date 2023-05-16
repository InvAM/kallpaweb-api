import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoPredio } from './tipo-predio.entity';
import { Repository } from 'typeorm';
import { CreateTipoPredioDto } from './dto/create-tipo-predio.dto';
@Injectable()
export class TipoPredioService {
  constructor(
    @InjectRepository(TipoPredio)
    private tipoPredioRepository: Repository<TipoPredio>,
  ) {}

  createTipoPredio(tipoPredio: CreateTipoPredioDto) {
    const newPre = this.tipoPredioRepository.create(tipoPredio);
    this.tipoPredioRepository.save(newPre);
  }

  getTipoPredio() {
    return this.tipoPredioRepository.find();
  }
}
