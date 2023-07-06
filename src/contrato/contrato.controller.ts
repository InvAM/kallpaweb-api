import { Body, Controller, Get,Patch,Param,ParseIntPipe,Post } from '@nestjs/common';
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
    @Patch(':IDContrato')
    updateContrato(
      @Param('IDContrato', ParseIntPipe) IDContrato: number,
      @Body() contrato: CreateContratoDto,
    ) {
      return this.contratoService.actualizarContrato(IDContrato,contrato);
    }
}
