import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CredencialesEmpleadoService } from 'src/credenciales-empleado/credenciales-empleado.service';
import * as bcryptjs from 'bcryptjs';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly credencialesService: CredencialesEmpleadoService,
    private readonly jwtService: JwtService,
  ) {}

  async register({
    DNI_Em,
    nombreusuario,
    contraseña,
    IDCategoria,
  }: registerDto) {
    const credenciales = await this.credencialesService.findOneByUsuario(
      nombreusuario,
    );

    if (credenciales) {
      throw new BadRequestException('Cuenta Existente');
    }

    return await this.credencialesService.createCredenciales({
      DNI_Em,
      nombreusuario,
      contraseña: await bcryptjs.hash(contraseña, 10),
      IDCategoria,
    });
  }

  async login({ nombreusuario, contraseña }: loginDto) {
    const cuenta = await this.credencialesService.findOneByUsuario(
      nombreusuario,
    );
    if (!cuenta) {
      throw new UnauthorizedException(
        'La cuenta que ingreso no esta registrada en el sistema',
      );
    }
    const isPasswordValid = await bcryptjs.compare(
      contraseña,
      cuenta.contraseña,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('password is wrong');
    }

    const payload = { nombreusuario: cuenta.nombreusuario };
    const token = await this.jwtService.signAsync(payload);
    return { token, cuenta };
  }
}
