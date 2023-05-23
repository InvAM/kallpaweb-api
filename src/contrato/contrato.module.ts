import { Module } from '@nestjs/common';
import { ContratoService } from './contrato.service';

@Module({
  providers: [ContratoService]
})
export class ContratoModule {}
