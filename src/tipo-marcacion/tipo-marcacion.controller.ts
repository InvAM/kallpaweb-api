import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TipoMarcacionService } from './tipo-marcacion.service';
import { CreateTipoMarcacionDto } from './dto/create-tipo-marcacion.dto';
import { TipoMarcacion } from './tipo-marcacion.entity';

@Controller('tipo-marcacion')
export class TipoMarcacionController {
    constructor(private tipoMarcacionService: TipoMarcacionService){}

    @Get()
    getTipoMarcacion(){
        return this.tipoMarcacionService.getTipoMarcacion();
    }

    @Post()
    createTipoMarcacion(@Body() newMar: CreateTipoMarcacionDto){
        return this.tipoMarcacionService.createTipoMarcacion(newMar);
    }

    @Get(':IDTipoMarcacion')
    getTipoMarcacionOne(@Param('IDTipoMarcacion') IDTipoMarcacion: number):Promise<TipoMarcacion>{
        return this.tipoMarcacionService.getTipoMarcacionOne(IDTipoMarcacion);
    }
}
