import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EtapaContrato } from './etapa-contrato.entity';
import { Repository } from 'typeorm';
import { EtapaService } from 'src/etapa/etapa.service';
import { ContratoService } from 'src/contrato/contrato.service';
import { EmpleadoService } from 'src/empleado/empleado.service';
import { CreateEtapaContratoDto } from './dto/etapa-contrato.dto';
import e from 'express';

@Injectable()
export class EtapaContratoService {
  constructor(
    @InjectRepository(EtapaContrato)
    private etapaContratoRepository: Repository<EtapaContrato>,
    private etapaService: EtapaService,
    private contratoService: ContratoService,
    private empleadoService: EmpleadoService,
  ) {}

  async createEtapaContrato(etapaContrato: CreateEtapaContratoDto) {
    const etapaFound = await this.etapaService.getEtapaOne(
      etapaContrato.IDEtapa,
    );
    const contratoFound = await this.contratoService.getContratoOne(
      etapaContrato.IDContrato,
    );
    const empleadoFound = await this.empleadoService.getEmpleadoOne(
      etapaContrato.DNI_Em,
    );

    if (!etapaFound && !contratoFound && !empleadoFound) {
      return new HttpException(
        'Faltan datos como IDEtapa, IDContrato y Dni_Em',
        HttpStatus.NOT_FOUND,
      );
    }

    const newEtapaContrato = this.etapaContratoRepository.create(etapaContrato);
    return this.etapaContratoRepository.save(newEtapaContrato);
  }

  getEtapaContrato() {
    return this.etapaContratoRepository.find({});
  }

  getEtapaContratoOne(IDEtapa: number, IDContrato: number) {
    return this.etapaContratoRepository.findOne({
      where: {
        IDEtapa: IDEtapa,
        IDContrato: IDContrato,
      },
    });
  }
}
