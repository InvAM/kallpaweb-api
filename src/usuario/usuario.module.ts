import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { DomicilioModule } from 'src/domicilio/domicilio.module';
import { EstadoCivilModule } from 'src/estado-civil/estado-civil.module';
import { NacionalidadModule } from 'src/nacionalidad/nacionalidad.module';
import { GeneroModule } from 'src/genero/genero.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    DomicilioModule,
    EstadoCivilModule,
    NacionalidadModule,
    GeneroModule,
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
