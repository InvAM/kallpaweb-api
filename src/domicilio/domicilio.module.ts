import { Module } from '@nestjs/common';
import { DomicilioController } from './domicilio.controller';
import { DomicilioService } from './domicilio.service';

@Module({
  controllers: [DomicilioController],
  providers: [DomicilioService]
})
export class DomicilioModule {}
