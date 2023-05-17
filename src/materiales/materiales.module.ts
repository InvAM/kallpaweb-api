import { Module } from '@nestjs/common';
import { MaterialesController } from './materiales.controller';
import { MaterialesService } from './materiales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materiales } from './materiales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Materiales])],
  controllers: [MaterialesController],
  providers: [MaterialesService],
})
export class MaterialesModule {}
