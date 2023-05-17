import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './genero.entity';
import { Repository } from 'typeorm';
import { CreateGeneroDto } from './dto/create-genero.dto';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero) private generoRepository: Repository<Genero>,
  ) {}

  createGenero(genero: CreateGeneroDto) {
    const newGen = this.generoRepository.create(genero);
    this.generoRepository.save(newGen);
  }

  getGenero() {
    return this.generoRepository.find();
  }

  getGeneroOne(IDGenero: number) {
    return this.generoRepository.findOne({
      where: {
        IDGenero,
      },
    });
  }
}
