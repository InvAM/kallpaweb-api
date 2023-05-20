import { Module } from '@nestjs/common';
import { CondicionService } from './condicion.service';
import { CondicionController } from './condicion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Condicion } from './condicion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Condicion])],
  providers: [CondicionService],
  controllers: [CondicionController],
  exports: [CondicionService],
})
export class CondicionModule {}
