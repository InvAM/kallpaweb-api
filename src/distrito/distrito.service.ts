import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Distrito } from './distrito.entity';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { Repository } from 'typeorm';
@Injectable()
export class DistritoService {
  constructor(
    @InjectRepository(Distrito)
    private distritoRepository: Repository<Distrito>,
  ) {}

  createDistrito(distrito: CreateDistritoDto) {
    const newDi = this.distritoRepository.create(distrito);
    this.distritoRepository.save(newDi);
  }

  getDistrito() {
    return this.distritoRepository.find();
  }

  getDistritoOne(IDDistrito: number) {
    return this.distritoRepository.findOne({
      where: {
        IDDistrito,
      },
    });
  }
}
