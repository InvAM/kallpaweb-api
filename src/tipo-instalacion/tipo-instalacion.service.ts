import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoInstalacion } from './tipo-instalacion.entity';
import { Repository } from 'typeorm';
import { CreateTipoInstalacionDto } from './dto/create-tipo-instalacion.dto';

@Injectable()
export class TipoInstalacionService {
  constructor(
    @InjectRepository(TipoInstalacion)
    private tipoInstalcionRepository: Repository<TipoInstalacion>,
  ) {}

  createTipoInstalacion(tipoInstalacion: CreateTipoInstalacionDto) {
    const newTI = this.tipoInstalcionRepository.create(tipoInstalacion);
    this.tipoInstalcionRepository.save(newTI);
  }

  getTipoInstalacion() {
    return this.tipoInstalcionRepository.find();
  }

  getTipoInstalacionOne(IDTipoInst: number) {
    return this.tipoInstalcionRepository.findOne({
      where: {
        IDTipoInst,
      },
    });
  }
}
