import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from './cliente.entity';
@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post()
  createCliente(@Body() cliente: CreateClienteDto) {
    return this.clienteService.createCliente(cliente);
  }

  @Get()
  getCliente() {
    return this.clienteService.getCliente();
  }

  @Get(':DNI_cli')
  getClienteOne(@Param('DNI_cli') DNI_cli: number): Promise<Cliente> {
    return this.clienteService.getClienteOne(DNI_cli);
  }

  @Patch(':DNI_cli')
  updateCliente(
    @Param('DNI_cli', ParseIntPipe) DNI_cli: number,
    @Body() cliente: CreateClienteDto,
  ) {
    return this.clienteService.actualizarCliente(DNI_cli, cliente);
  }
}
