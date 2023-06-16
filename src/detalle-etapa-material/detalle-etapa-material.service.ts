import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleEtapaMaterial } from './detalle-etapa-material.entity';
import { Repository } from 'typeorm';
import { EtapaContratoService } from 'src/etapa-contrato/etapa-contrato.service';
import { MaterialesService } from 'src/materiales/materiales.service';
import { CreateDetalleETapaMaterialDto } from './dto/detalle-etapa-material.dto';

@Injectable()
export class DetalleEtapaMaterialService {
  constructor(
    @InjectRepository(DetalleEtapaMaterial)
    private detalleEtapaMaterialRepository: Repository<DetalleEtapaMaterial>,
    private etapaContratoService: EtapaContratoService,
    private materialesService: MaterialesService,
  ) {}

  async createDetalleEtapaMaterial(
    detalleEtapaMaterial: CreateDetalleETapaMaterialDto,
  ) {
    const etapaContratoFound =
      await this.etapaContratoService.getEtapaContratoOne(
        detalleEtapaMaterial.IDEtapa,
        detalleEtapaMaterial.IDContrato,
      );

    const materialesFound = await this.materialesService.getMaterialOne(
      detalleEtapaMaterial.IDMateriales,
    );

    if (!etapaContratoFound && !materialesFound) {
      return new HttpException(
        'Faltan datos como IDEtapa, IDContrato y IDMateriales ',
        HttpStatus.NOT_FOUND,
      );
    }
    const newDetalleEtapMaterial =
      this.detalleEtapaMaterialRepository.create(detalleEtapaMaterial);
    return this.detalleEtapaMaterialRepository.save(newDetalleEtapMaterial);
  }

  getDetalleEtapaMaterial() {
    return this.detalleEtapaMaterialRepository.find({
      relations: ['materiales', 'etapaContrato'],
    });
  }

  getDetalleEtapaMaterialOne(
    IDContrato: number,
    IDEtapa: number,
    IDMateriales: number,
  ) {
    return this.detalleEtapaMaterialRepository.findOne({
      where: {
        IDContrato: IDContrato,
        IDEtapa: IDEtapa,
        IDMateriales: IDMateriales,
      },
    });
  }
}
