import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Domicilio } from './domicilio.entity';
import { Repository } from 'typeorm';
import { CreateDomicilioDto } from './dto/create-domicilio.dto';
import { CondicionService } from 'src/condicion/condicion.service';
import { TipoPredioService } from 'src/tipo-predio/tipo-predio.service';
import { EstratoService } from 'src/estrato/estrato.service';
import { DistritoService } from 'src/distrito/distrito.service';

@Injectable()
export class DomicilioService {
  constructor(
    @InjectRepository(Domicilio)
    private domicilioRepository: Repository<Domicilio>,
    private condicionService: CondicionService,
    private tipoPredioService: TipoPredioService,
    private estratoService: EstratoService,
    private distritoService: DistritoService,
  ) {}

  async createDomiclio(domicilio: CreateDomicilioDto) {
    const condicionFound = await this.condicionService.getCondicionOne(
      domicilio.IDCondicion,
    );
    const tipoPredioFound = await this.tipoPredioService.getTipoPredioOne(
      domicilio.IDPredio,
    );
    const estratoFound = await this.estratoService.getEstratoOne(
      domicilio.IDEstrato,
    );
    const distritoFound = await this.distritoService.getDistritoOne(
      domicilio.IDDistrito,
    );

    if (
      !condicionFound &&
      !tipoPredioFound &&
      !estratoFound &&
      !distritoFound
    ) {
      return new HttpException(
        'Faltan datos (IDCondicion, IDPredio, IDEstrato, IDDistrito)',
        HttpStatus.NOT_FOUND,
      );
    }

    const newDomicilio = this.domicilioRepository.create(domicilio);
    return this.domicilioRepository.save(newDomicilio);
  }

  getDomicilio() {
    return this.domicilioRepository.find({
      relations: ['condicion', 'estrato', 'tipopredio', 'distrito'],
    });
    //Todo ese fragmento va dentro de find (aun en prueba)
  }

  getDomicilioOne(IDDomicilio: number) {
    return this.domicilioRepository.findOne({
      where: {
        IDDomicilio: IDDomicilio,
      },
    });
  }
}
