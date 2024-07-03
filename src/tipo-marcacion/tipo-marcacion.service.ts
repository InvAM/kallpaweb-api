import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoMarcacion } from './tipo-marcacion.entity';
import { Repository } from 'typeorm';
import { CreateTipoMarcacionDto } from './dto/create-tipo-marcacion.dto';

@Injectable()
export class TipoMarcacionService {
  constructor(
    @InjectRepository(TipoMarcacion)
    private tipoMarcacionRepository: Repository<TipoMarcacion>,
  ) {}

  createTipoMarcacion(tipoMarcacion: CreateTipoMarcacionDto) {
    const newMar = this.tipoMarcacionRepository.create(tipoMarcacion);
    this.tipoMarcacionRepository.save(newMar);
  }

  getTipoMarcacion() {
    return this.tipoMarcacionRepository.find();
  }

  getTipoMarcacionOne(IDTipoMarcacion: number){
    return this.tipoMarcacionRepository.findOne({
        where:{
            IDTipoMarcacion,
        }
    })
  }
}
