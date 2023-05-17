import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
    private usuarioService: UsuarioService,
  ) {}

  createUsuario(usuario) {}

  getUsuario() {}
}
