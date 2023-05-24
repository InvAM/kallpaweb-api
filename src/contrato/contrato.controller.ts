import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { CreateContratoDto } from './dto/create-contrato.dto';

@Controller('contrato')
export class ContratoController {
    constructor(private contratoService: ContratoService){}

    @Post()
    createContrato(@Body() contrato: CreateContratoDto){
        return this.contratoService.createContrato(contrato);
    }

    @Get()
    getContrato(){
        return this.contratoService.getContrato();
    }

}
