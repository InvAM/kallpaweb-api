import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEtapaDto } from './dto/create-etapa.dto';
import { EtapaService } from './etapa.service';

@Controller('etapa')
export class EtapaController {
   constructor(private etapaService: EtapaService){}

   @Get()
   getEtapa(){
    return this.etapaService.getEtapa();
   }

   @Post()
   createEtapa(@Body() newEta: CreateEtapaDto){
    return this.etapaService.createEtapa(newEta);
   }
}
