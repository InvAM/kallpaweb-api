import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { DomicilioService } from 'src/domicilio/domicilio.service';
import { EstadoCivilService } from 'src/estado-civil/estado-civil.service';
import { NacionalidadService } from 'src/nacionalidad/nacionalidad.service';
import { GeneroService } from 'src/genero/genero.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { updateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
    private domicilioService: DomicilioService,
    private estadocivilService: EstadoCivilService,
    private nacionalidadService: NacionalidadService,
    private generoService: GeneroService,
  ) {}

  async createCliente(cliente: CreateClienteDto) {
    const domicilioFound = await this.domicilioService.getDomicilioOne(
      cliente.IDDomicilio,
    );
    const estadocivilFound = await this.estadocivilService.getEstadoCivilOne(
      cliente.IDEstadoCivil,
    );
    const nacionalidadFound = await this.nacionalidadService.getNacionalidadOne(
      cliente.IDNacionalidad,
    );
    const generoFound = await this.generoService.getGeneroOne(cliente.IDGenero);

    if (
      !domicilioFound &&
      !estadocivilFound &&
      !nacionalidadFound &&
      !generoFound
    ) {
      return new HttpException(
        'Faltan datos (IDDomicilio, IDEstadoCivil, IDEstrato, IDDistrito)',
        HttpStatus.NOT_FOUND,
      );
    }

    const newCliente = this.clienteRepository.create(cliente);
    return this.clienteRepository.save(newCliente);
  }

  getCliente() {
    return this.clienteRepository.find({
      relations: ['genero', 'nacionalidad', 'estadocivil', 'domicilio'],
    });
  }

  getClienteOne(DNI_cli: number) {
    return this.clienteRepository.findOne({
      where: {
        DNI_cli,
      },
      relations: ['genero', 'nacionalidad', 'estadocivil', 'domicilio'],
    });
  }

  actualizarCliente(DNI_cli: number, cliente: updateClienteDto) {
    this.clienteRepository.update({ DNI_cli }, cliente);
  }
}
