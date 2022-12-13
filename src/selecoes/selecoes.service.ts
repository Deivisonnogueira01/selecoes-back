import {
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Selecao } from './entities/selecoes.entity';

@Injectable()
export class SelecaoService {

  constructor(
    @InjectRepository(Selecao)
    private SelecaoRepository: Repository<Selecao>,
  ) {}


  async findAll(): Promise<Selecao[]> {
    try {
      return await this.SelecaoRepository.find();
    } catch (err) {
      console.log('Impossível buscar Selecão Selecionada!');
      return null;
    }
  }

  async findOne(id: number): Promise<Selecao> {

    const Selecao = this.SelecaoRepository.createQueryBuilder('Selecao')
      .select(['Selecao.id', 'Selecao.nome'])
      .getOne();
    if (!Selecao) throw new NotFoundException('Selecão não encontrada');

    return Selecao;

  }

 
  async findByNome(nome: string): Promise<Selecao> {
    return await this.SelecaoRepository.findOneBy({ nome });
  }
 
  async remove(SelecaoId: number) {
    const result = await this.SelecaoRepository.delete({ id: SelecaoId });
    if (result.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrado uuma Seleção com o ID informado',
      );
    }

  }

}
