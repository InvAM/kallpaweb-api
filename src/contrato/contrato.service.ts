import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Contrato } from './contrato.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaGabineteService } from 'src/categoria-gabinete/categoria-gabinete.service';
import { TipoInstalacionService } from 'src/tipo-instalacion/tipo-instalacion.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { EmpleadoService } from 'src/empleado/empleado.service';
import { CreateContratoDto } from './dto/create-contrato.dto';

@Injectable()
export class ContratoService {
  constructor(
    @InjectRepository(Contrato)
    private contratoRepository: Repository<Contrato>,
    private categoriagabineteService: CategoriaGabineteService,
    private tipoinstalacionService: TipoInstalacionService,
    private usuarioService: UsuarioService,
    private empleadoService: EmpleadoService,
  ) {}

  async createContrato(contrato: CreateContratoDto) {
    const categoriagabineteFound =
      await this.categoriagabineteService.getCategoriaGabineteOne(
        contrato.IDGabineteCategoria,
      );
    const tipoinstalacionFound =
      await this.tipoinstalacionService.getTipoInstalacionOne(
        contrato.IDTipoInst,
      );
    const usuarioFound = await this.usuarioService.getUsuarioOne(
      contrato.DNI_Usu,
    );
    const empleadoFound = await this.empleadoService.getEmpleadoOne(
      contrato.DNI_Em,
    );

    if (
      !categoriagabineteFound &&
      !tipoinstalacionFound &&
      !usuarioFound &&
      !empleadoFound
    ) {
      return new HttpException(
        'Faltan datos (IDGabineteCategoria,IDTipoInst,DNI_Usu,DNI_Em)',
        HttpStatus.NOT_FOUND,
      );
    }

    const newContrato = this.contratoRepository.create(contrato);
    return this.contratoRepository.save(newContrato);
  }

  getContrato() {
    return this.contratoRepository.find();
  }

  getContratoOne(IDContrato: number) {
    return this.contratoRepository.findOne({
      where: {
        IDContrato: IDContrato,
      },
    });
  }
}
