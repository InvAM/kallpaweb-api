import { Module } from '@nestjs/common';
import { TipoPredioController } from './tipo-predio.controller';
import { TipoPredioService } from './tipo-predio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPredio } from './tipo-predio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPredio])],
  controllers: [TipoPredioController],
  providers: [TipoPredioService],
  exports: [TipoPredioService],
})
export class TipoPredioModule {}
