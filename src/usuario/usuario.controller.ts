import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Post()
    createUsuario(@Body() usuario: CreateUsuarioDto){
        return this.usuarioService.createUsuario(usuario);
    }

    @Get()
    getUsuario() {
        return this.usuarioService.getUsuario();
    }
}
