import { Module } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from './contrato.entity';
import { CategoriaGabineteModule } from 'src/categoria-gabinete/categoria-gabinete.module';
import { TipoInstalacionModule } from 'src/tipo-instalacion/tipo-instalacion.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { EmpleadoModule } from 'src/empleado/empleado.module';
import { ContratoController } from './contrato.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contrato]),
    CategoriaGabineteModule,
    TipoInstalacionModule,
    UsuarioModule,
    EmpleadoModule,
  ],
  controllers: [ContratoController],
  providers: [ContratoService],
  exports: [ContratoService],
})
export class ContratoModule {}
