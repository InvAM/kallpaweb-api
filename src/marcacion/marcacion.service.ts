import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marcacion } from './marcacion.entity';
import { TipoMarcacion } from 'src/tipo-marcacion/tipo-marcacion.entity';
import { TipoMarcacionService } from 'src/tipo-marcacion/tipo-marcacion.service';
import { CreateMarcacionDto } from './dto/create-marcacion.dto';

@Injectable()
export class MarcacionService {
  constructor(
    @InjectRepository(Marcacion)
    private marcacionRepository: Repository<Marcacion>,
    private tipoMarcacion: TipoMarcacionService,
  ) {}

  async createMarcacion(marcacion: CreateMarcacionDto) {
    const TipoMarcacionFound = await this.tipoMarcacion.getTipoMarcacionOne(
      marcacion.IDTipo_Marcacion,
    );
    if (!TipoMarcacionFound) {
      return new HttpException(
        'Faltan datos (IDTipoMarcacion)',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  getMarcacion() {
    return this.marcacionRepository.find({
      relations: ['tipoMarcacion'],
    });
  }

  getMarcacionOne(DNI_Em: number) {
    return this.marcacionRepository.findOne({
      where: {
        DNI_Em,
      },
    });
  }

  updateMarcacion(DNI_Em: number, marcacion: CreateMarcacionDto) {
    this.marcacionRepository.update({ DNI_Em }, marcacion);
  }
}
