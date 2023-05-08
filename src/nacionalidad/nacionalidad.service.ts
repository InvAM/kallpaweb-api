import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nacionalidad } from './nacionalidad.entity';
import { Repository } from 'typeorm';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';

@Injectable()
export class NacionalidadService {
  constructor(
    @InjectRepository(Nacionalidad)
    private nacionalidadRepository: Repository<Nacionalidad>,
  ) {}

  createNacionalidad(nacionalidad: CreateNacionalidadDto) {
    const newNac = this.nacionalidadRepository.create(nacionalidad);
    this.nacionalidadRepository.save(newNac);
  }

  getNacionalidad() {
    return this.nacionalidadRepository.find();
  }
}
