import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { DomicilioService } from 'src/domicilio/domicilio.service';
import { EstadoCivilService } from 'src/estado-civil/estado-civil.service';
import { NacionalidadService } from 'src/nacionalidad/nacionalidad.service';
import { GeneroService } from 'src/genero/genero.service';
import { CreateUsuarioDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private domicilioService: DomicilioService,
    private estadocivilService: EstadoCivilService,
    private nacionalidadService: NacionalidadService,
    private generoService: GeneroService,
  ) {}

  async createUsuario(usuario: CreateUsuarioDto) {
    const domicilioFound = await this.domicilioService.getDomicilioOne(
      usuario.IDDomicilio,
    );
    const estadocivilFound = await this.estadocivilService.getEstadoCivilOne(
      usuario.IDEstadoCivil,
    );
    const nacionalidadFound = await this.nacionalidadService.getNacionalidadOne(
      usuario.IDNacionalidad,
    );
    const generoFound = await this.generoService.getGeneroOne(usuario.IDGenero);

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

    const newUsuario = this.usuarioRepository.create(usuario);
    return this.usuarioRepository.save(newUsuario);
  }

  getUsuario() {
    return this.usuarioRepository.find({
      relations: ['genero', 'nacionalidad', 'estadocivil', 'domicilio'],
    });
  }

  getUsuarioOne(DNI_cli: number) {
    return this.usuarioRepository.findOne({
      where: {
        DNI_cli,
      },
    });
  }
}
