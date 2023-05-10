import { Module } from '@nestjs/common';
import { EstratoService } from './estrato.service';
import { EstratoController } from './estrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estrato } from './estrato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estrato])],
  providers: [EstratoService],
  controllers: [EstratoController],
})
export class EstratoModule {}
