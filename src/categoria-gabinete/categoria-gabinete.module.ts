import { Module } from '@nestjs/common';
import { CategoriaGabineteController } from './categoria-gabinete.controller';
import { CategoriaGabineteService } from './categoria-gabinete.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria_Gabinete } from './categoria-gabinete.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria_Gabinete])],
  controllers: [CategoriaGabineteController],
  providers: [CategoriaGabineteService],
  exports: [CategoriaGabineteService],
})
export class CategoriaGabineteModule {}
