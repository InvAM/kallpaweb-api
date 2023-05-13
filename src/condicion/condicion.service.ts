import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Condicion } from './condicion.entity';
import { Repository } from 'typeorm';
import { CreateCondicionDto } from './dto/create-condicion.dto';
@Injectable()
export class CondicionService {
  constructor(
    @InjectRepository(Condicion)
    private condicionRepository: Repository<Condicion>,
  ) {}

  createCondicion(condicion: CreateCondicionDto) {
    const newCon = this.condicionRepository.create(condicion);
    this.condicionRepository.save(newCon);
  }

  getCondicion() {
    return this.condicionRepository.find();
  }
}
