import { Controller, Post, Get, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService) {}

    @Post()
    createCliente(@Body() cliente: CreateClienteDto){
        return this.clienteService.createCliente(cliente);
    }

    @Get()
    getCliente(){
        return this.clienteService.getCliente();
    }
}
